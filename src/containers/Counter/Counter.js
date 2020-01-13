import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Counter.css'
import {
    addCounter,
    decrementCounter,
    fetchCounter,
    incrementCounter,
    subtractCounter
} from "../../store/action";
import Spinner from "../../components/UI/Spinner/Spinner";
import {Button, Card, CardBody, Container} from "reactstrap";

class Counter extends Component {
    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {
        return (
            <Container>
                <div className='Counter'>
                    <Card body outline color="danger">
                        <CardBody>
                            <h1>{this.props.loading ? <Spinner/> : this.props.counterThis}</h1>
                            <Button outline color="primary" onClick={this.props.incrementCounter}>Inc by 1</Button>
                            <Button outline color="danger" onClick={this.props.decrementCounter}>Dec by 1</Button>
                            <Button outline color="primary" onClick={this.props.addCounter}>Inc by 5</Button>
                            <Button outline color="danger" onClick={this.props.subtractCounter}>Dec by 5</Button>
                        </CardBody>
                    </Card>
                </div>
            </Container>

        );
    }
}
const mapStateToProps = state =>{
    return {
        counterThis:state.counter,
        loading:state.loading
    }
};

const mapDispatchToProps = dispatch =>{
   return{
       incrementCounter: () => dispatch(incrementCounter()),
       decrementCounter: () => dispatch(decrementCounter()),
       addCounter: () => dispatch(addCounter(5)),
       subtractCounter: () => dispatch(subtractCounter(5)),
       fetchCounter: () => dispatch(fetchCounter()),

   }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);