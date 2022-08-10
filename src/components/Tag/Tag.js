
import { Component } from "react";
import "./Tag.scss";
import { getDoc, DocumentReference } from "firebase/firestore";

class Tag extends Component {

    constructor(props) {
        super();
        this.state = {
            tags: []
        };
    }
    componentDidMount() {
        this.props.tags.forEach((tag) => {
            this.getTagById(tag);
        })

    }
    getTagById = async (tagDocRef) => {
        const clubSnapshot = await getDoc(tagDocRef);
        this.setState({ tags: [...this.state.tags, clubSnapshot.data()] })
    };

    render() {
        return <>
            {this.state.tags && this.state.tags.map((tag) =>
                <span key={tag.name} className={this.props.className}>{tag.name}</span>
            )}
        </>;
    }
}

export default Tag;