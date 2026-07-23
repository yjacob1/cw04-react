import React, { Component } from 'react';

class List extends Component {
    render() {
        const { items } = this.props;

        if (items.length === 0) {
            return <p className="empty-message">No items match your filters.</p>;
        }

        return (
            <ul className="item-list">
                {items.map((item) => (
                    <li key={item.id} className="item-list-row">
                        <span className="item-name">{item.name}</span>
                        <span className="item-type">{item.type}</span>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;
