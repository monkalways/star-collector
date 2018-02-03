import React from 'react';
import { Button, Checkbox, Form, Input, Message, TextArea } from 'semantic-ui-react';

export default class UserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.user ? props.user.id : '',
            stars: props.user ? props.user.stars : 0,
            halfStar: props.user ? props.user.halfStar : false,
            error: undefined
        };
    }

    onStarsChange = (e, data) => {
        const stars = data.value;
        this.setState(() => ({ stars }));
    };
    onHalfStarChange = (e, data) => {
      const halfStar = data.checked;
      this.setState(() => ({ halfStar }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.stars) {
            this.setState(() => ({ error: 'Please provide stars' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                id: this.state.id,
                stars: this.state.stars,
                halfStar: this.state.halfStar
            });
        }
    };
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
              
              {this.state.error && (
                <Message negative>
                  <Message.Header>{this.state.error}</Message.Header>
                </Message>
              )}
              <Form.Field>
                  <label>Stars</label>
                  <Input 
                    type="number"
                    placeholder="Stars"
                    autoFocus
                    value={this.state.stars}
                    onChange={this.onStarsChange}
                  />
              </Form.Field>
              <Form.Field>
                  <Checkbox 
                    label='Half Star' 
                    checked={this.state.halfStar}
                    onChange={this.onHalfStarChange} />
              </Form.Field>
              <Button type="submit" primary>Save</Button>
            </Form>
        );
    }
}
