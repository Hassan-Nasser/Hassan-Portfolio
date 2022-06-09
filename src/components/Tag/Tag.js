
import { Component } from "react";
import "./Tag.scss";
import { Badge } from 'react-bootstrap';

class Tag extends Component {
    render() {
        return <>
            {this.props.tags && this.props.tags.map((tag) =>
                <span className={this.props.className}>{tag}</span>
            )}
        </>;
    }
}

export default Tag;