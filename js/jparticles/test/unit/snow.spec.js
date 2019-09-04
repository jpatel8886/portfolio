import './helpers/dom';
import '../../production/snow';
import test from 'ava';
const {snow} = JParticles;

test('defaultConfig', t => {
    t.deepEqual(snow.defaultConfig, {
        color: '#fff',
        maxR: 6.5,
        minR: .4,
        maxSpeed: .6,
        minSpeed: .1
    });
});

test('change defaultConfig', t => {
    const newConfig = {
        color: 'red',
        maxR: 2,
        minR: 1
    };
    snow.defaultConfig = newConfig;
    t.deepEqual(snow.defaultConfig, newConfig);
});