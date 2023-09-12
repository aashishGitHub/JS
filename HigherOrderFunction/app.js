import React from 'react';

// the doFilter() function needs to know about the query property
//  from the state.So you can pass it to the function by wrapping it with another function
//  which leads to a higher - order function.

// Extracting these functions into(higher - order) functions outside of a React component can 
// be beneficial for testing React’s local state management in isolation as well.
function doFilter(query) {
    return function (user) {
        return query === user.name;
    }
}
// Using arrow function

// const doFilter = query => user =>
//     query === user.name;

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ query: event.target.value });
    }

    render() {
        const users = [
            { name: 'Robin' },
            { name: 'Markus' },

        ];
        return (
            <div>
                <ul>
                    {users
                        .filter(doFilter(this.state.query))
                        .map(myuser => <li>{myuser.name}</li>)
                    }
                </ul>
                <input
                    type="text"
                    onChange={this.onChange}
                />
            </div>
        );
    }
}