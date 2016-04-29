// for external integration with charting use https://api.github.com/search/repositories?q=%20+fork:true+user:jrhalchak
import appController from './modules/entries-controller';

appController.initApp($('.js-entriesAppContainer')[0]);
