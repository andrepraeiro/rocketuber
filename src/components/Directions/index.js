import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_APY_KEY } from '../../keys'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={GOOGLE_APY_KEY}
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
