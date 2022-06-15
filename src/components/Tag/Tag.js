
import { Component } from "react";
import "./Tag.scss";

class Tag extends Component {
    render() {
        return <>
            {this.props.tags && this.props.tags.map((tag) =>
                <span key={tag} className={this.props.className}>{tag}</span>
            )}
        </>;
    }
}

export default Tag;