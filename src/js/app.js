/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

(async () => {
    try {
        const data = await GameSavingLoader.load();
        console.log(data);
    } catch (error) {
        return error;
    }
})();
