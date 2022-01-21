import styles from 'CssFolder/main.scss';

const images = importAll(require.context('ImgFolder/img/', false, /\.(png|jpe?g|svg)$/));

import { video } from "VideoFolder/BreakingBadTrailer.mp4";

import global from './global.js';
import mostrarInfoPerfil from './mostrarInfoPerfil.js';
import mostrarNavHeaderResponsivo from './mostrarNavHeaderResponsivo.js';
import headerDiminuirScroll from './headerDiminuirScroll.js';
import abrirInputTextSearch from './abrirInputTextSearch.js';
import abrirVideoPrincipal from './abrirVideoPrincipal.js';
import selectEpisodesCustom from './selectEpisodesCustom.js';
import createFilmesTinySlideMoreLikeThisDom from './createFilmesTinySlideMoreLikeThisDom.js';
import createComment from './createComment.js';

// Tiny slide
import tinySlide from './tinySlide.js';



function importAll(r) {
  return r.keys().map(r);
}