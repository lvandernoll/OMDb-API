import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestHelloWorld, recieveHelloWorld } from 'actions';

interface Props {
  requestHelloWorld: () => Object,
  recieveHelloWorld: (payload: string) => Object,
  helloWorld: string,
}

const HelloWorld: React.FC<Props> = ({ requestHelloWorld, recieveHelloWorld, helloWorld }) => {
  useEffect(() => {
    requestHelloWorld();
    recieveHelloWorld('Recieve');
  }, [requestHelloWorld, recieveHelloWorld]);

  return (
    <h1>{helloWorld}</h1>
  )
}

const mapStateToProps = (state: any) => ({ helloWorld: state.helloWorldReducer });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ requestHelloWorld, recieveHelloWorld }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
