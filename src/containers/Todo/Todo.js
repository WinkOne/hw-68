import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, Container, Input} from "reactstrap";
import {connect} from "react-redux";
import {fetchGetPost, fetchRemovePost, getPost, typePost} from "../../store/action";

class Todo extends Component {
    componentDidMount() {
        this.props.fetchGetPost();
    }

    render() {
        return (
            <Container>
                <div className="todo">
                    <Card body outline color="danger" style={{padding: "50px", margin: "0 0 15px 0"}}>
                        <CardBody>
                            <Input onChange={this.props.typePost}
                                   style={{marginBottom: "25px", border: "1px solid green"}} type="text"
                                   placeholder="Enter your text"/>
                            <Button onClick={this.props.getPost} outline color="success">Submit</Button>
                        </CardBody>
                    </Card>
                </div>

                {this.props.postThis && Object.keys(this.props.postThis).map(post => {
                    return (
                        <Card style={{margin: "0 0 15px 0"}} body outline color="primary" key={post}>
                            <CardBody>
                                <CardSubtitle>{this.props.postThis[post].time}</CardSubtitle>
                                <CardText>{this.props.postThis[post].text}</CardText>
                                <Button onClick={() => this.props.fetchRemovePost(post)} outline
                                        color="danger">Delete</Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        postThis: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        typePost: (event) => dispatch(typePost(event.target.value)),
        getPost: () => dispatch(getPost()),
        fetchGetPost: () => dispatch(fetchGetPost()),
        fetchRemovePost: (deletePost) => dispatch(fetchRemovePost(deletePost))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);