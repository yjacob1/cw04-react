import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'All',
        };
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleTypeSelect = (type) => {
        this.setState({ type });
    };

    render() {
        const { items } = this.props;
        const { search, type } = this.state;

        const filteredItems = items.filter((item) => {
            const matchesSearch = item.name
                .toLowerCase()
                .includes(search.toLowerCase());
            const matchesType = type === 'All' || item.type === type;
            return matchesSearch && matchesType;
        });

        return (
            <div className="filtered-list">
                <div className="filtered-list-controls">
                    <input
                        type="text"
                        className="filtered-list-search"
                        placeholder="Search items..."
                        value={search}
                        onChange={this.handleSearchChange}
                    />
                    <DropdownButton
                        title={`Type: ${type}`}
                        onSelect={this.handleTypeSelect}
                        variant="secondary"
                    >
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                        <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
                    </DropdownButton>
                </div>
                <List items={filteredItems} />
            </div>
        );
    }
}

export default FilteredList;
