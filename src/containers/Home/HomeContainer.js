import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';
import * as RecipeActions from '@redux/recipes/actions';

// The component we're mapping to
import AppLaunchRender from './HomeView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
  login: UserActions.login,
  getRecipes: RecipeActions.getRecipes,
  getMeals: RecipeActions.getMeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLaunchRender);
