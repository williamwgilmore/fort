import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
    <div>
        <div>
            <button>Run</button>
        </div>
    </div>
);

export default connect()(Home);
