/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

(async () => {
    try {
        const data = await GameSavingLoader.load();
    } catch (error) {
        return error;
    }
})();
