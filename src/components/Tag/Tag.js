
import { Component } from "react";
import "./Tag.scss";
import { Badge } from 'react-bootstrap';

class Tag extends Component {
    render() {
        return <>
            {this.props.tags && this.props.tags.map((tag) =>
                <Badge className={this.props.className}>{tag}</Badge>
            )}
        </>;
    }
}

export default Tag;