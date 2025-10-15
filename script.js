//script para grafica de barras
import { finalConfig, configDona, configLinear} from './config.js';

const ctx = document.getElementById('miGrafico').getContext('2d');
const miGrafico = new Chart(ctx, finalConfig);


//script para grafica de dona
const ctxDona = document.getElementById('MiDona');
const miDona = new Chart(ctxDona, configDona);


//script para grafica lineal
const ctxLinear = document.getElementById('MiLinear').getContext('2d');
const MiLinear = new Chart(ctxLinear, configLinear);
