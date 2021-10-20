import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import HomeStack from './useTabNavigation'
import { Nav } from './navigationType';
import Search from '../screens/home/searchTab'
import Family from '../screens/home/Family/family'
import FamilyHome from '../screens/home/Family/FamilyHome';
import FamilyList from '../screens/home/Family/familyList'
import ServicesHome from '../screens/home/services/servicesHome';
import AlNikkah from '../screens/home/services/al-nikkah/alnikah'
import Barat from '../screens/home/services/barat/barat'
import BaratHome from '../screens/home/services/barat/barathome'
import BaratList from '../screens/home/services/barat/baratList'
import BaratSelected from '../screens/home/services/barat/selectedBarat'
import FurnitureHome from '../screens/home/services/furniture/furniture';
import AddFurnitureDetailes from '../screens/home/services/furniture/addFurniture';
import SelectedFurniture from '../screens/home/services/furniture/selectedFurniture';
import FurnitureList from '../screens/home/services/furniture/furnitureList'
import FoodAndFood from '../screens/home/services/foodandfood/foodandfood'
import FoodHome from '../screens/home/services/foodandfood/foodhome'
import FoodList from '../screens/home/services/foodandfood/foodList'
import FoodSelected from '../screens/home/services/foodandfood/selectedfood'
import Saloon from '../screens/home/services/saloon/saloon'
import Valima from '../screens/home/services/valima/valima'
import ValimaHome from '../screens/home/services/valima/valimahome'
import ValimaList from '../screens/home/services/valima/valimaList'
import ValimaSelected from '../screens/home/services/valima/selectedvalima'
import Wedding from '../screens/home/services/weedingDress/weedingDress'
import WeddingHome from '../screens/home/services/weedingDress/Weedinghome'
import WeddingList from '../screens/home/services/weedingDress/WeedingList'
import WeddingSelected from '../screens/home/services/weedingDress/selectedWeeding'
import SaloonHome from '../screens/home/services/saloon/saloonhome'
import SaloonList from '../screens/home/services/saloon/saloonList'
import SaloonSelected from '../screens/home/services/saloon/selectedsaloon'
import RentACar from '../screens/home/services/rentAcar/rentacar'
import RentACarHome from '../screens/home/services/rentAcar/rentacarhome'
import RentACarList from '../screens/home/services/rentAcar/rentacarList'
import RentACarSelected from '../screens/home/services/rentAcar/selectedrentacar'
import RegisterShadi from '../screens/home/Family/shadiRegister'
import MartHome from '../screens/home/mart/home'
import EMartHome from '../screens/home/ecommerce/home'
import Funrel from '../screens/home/funrel/home'
import Jobs from '../screens/home/jobs/home'
import Product from '../screens/home/mart/product';
import EProduct from '../screens/home/ecommerce/product';
import JObApply from '../screens/home/jobs/Apply'
import Videos from '../screens/videos/videos'
import Quiz from '../screens/Quiz/WinForCash'
import Business from '../screens/home/buisness/home'
import QuizQuestion from '../screens/Quiz/Questions'
import Affilation from '../screens/affilation/affilation'
import Articles from '../screens/affilation/affilationList'
import ArticlesPage from '../screens/affilation/articlepage'
import Cart from '../screens/home/mart/cart'
import ECart from '../screens/home/ecommerce/cart'
import Profile from '../screens/home/profile'
import OPD from '../screens/home/opd/opd';
import OPDHome from '../screens/home/opd/opdhome';
import OPDCategories from '../screens/home/opd/opdcategories';
import OPDTest from '../screens/home/opd/test';
import News from '../screens/home/news';
const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: 'none',
};
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={Nav.HomeStack} >
      <Stack.Screen name={Nav.SearchTab} component={Search} />
      <Stack.Screen name={Nav.HomeStack} component={HomeStack} />
      <Stack.Screen name={Nav.Family} component={Family} />
      <Stack.Screen name={Nav.FamilyHome} component={FamilyHome} />
      <Stack.Screen name={Nav.FamilyList} component={FamilyList} />
      <Stack.Screen name={Nav.RegisterShadi} component={RegisterShadi} />
      {/*
  Services
*/}
      <Stack.Screen name={Nav.Profile} component={Profile} />
      <Stack.Screen name={Nav.ServicesHome} component={ServicesHome} />
      <Stack.Screen name={Nav.Alnikkah} component={AlNikkah} />
      <Stack.Screen name={Nav.Barat} component={Barat} />
      <Stack.Screen name={Nav.FunritureHome} component={FurnitureHome} />
      <Stack.Screen name={Nav.FurnitureList} component={FurnitureList} />
      <Stack.Screen name={Nav.FunrtitureDetailes} component={AddFurnitureDetailes} />
      <Stack.Screen name={Nav.SelectedFurniture} component={SelectedFurniture} />
     
      <Stack.Screen name={Nav.BaratHome} component={BaratHome} />
      <Stack.Screen name={Nav.BaratList} component={BaratList} />
      <Stack.Screen name={Nav.BaratSelected} component={BaratSelected} />
     
      <Stack.Screen name={Nav.FoodHome} component={FoodHome} />
      <Stack.Screen name={Nav.FoodList} component={FoodList} />
      <Stack.Screen name={Nav.FoodSelected} component={FoodSelected} />
     
      <Stack.Screen name={Nav.FoodAndFood} component={FoodAndFood} />
      <Stack.Screen name={Nav.Saloon} component={Saloon} />
      <Stack.Screen name={Nav.SaloonHome} component={SaloonHome} />
      <Stack.Screen name={Nav.SaloonList} component={SaloonList} />
      <Stack.Screen name={Nav.SaloonSelected} component={SaloonSelected} />
      <Stack.Screen name={Nav.WeedingDress} component={Wedding} />
      <Stack.Screen name={Nav.WeedingHome} component={WeddingHome} />
      <Stack.Screen name={Nav.WeedingList} component={WeddingList} />
      <Stack.Screen name={Nav.WeedingSelected} component={WeddingSelected} />
     
      <Stack.Screen name={Nav.Valima} component={Valima} />
      <Stack.Screen name={Nav.ValimaHome} component={ValimaHome} />
      <Stack.Screen name={Nav.ValimaList} component={ValimaList} />
      <Stack.Screen name={Nav.ValimaSelected} component={ValimaSelected} />
      <Stack.Screen name={Nav.RentACar} component={RentACar} />
      <Stack.Screen name={Nav.RentacarHome} component={RentACarHome} />
      <Stack.Screen name={Nav.RentacarList} component={RentACarList} />
      <Stack.Screen name={Nav.RentacarSelected} component={RentACarSelected} />
      <Stack.Screen name={Nav.QuizQuestion} component={QuizQuestion} />
      {
        /*
      Mart
        */
      }
      <Stack.Screen name={Nav.MartHome} component={MartHome} />
      <Stack.Screen name={Nav.Product} component={Product} />
      <Stack.Screen name={Nav.CartSummry} component={Cart} />
      {
        /*
     E-Com
        */
      }
      <Stack.Screen name={Nav.EMartHome} component={EMartHome} />
      <Stack.Screen name={Nav.EProduct} component={EProduct} />
      <Stack.Screen name={Nav.ECartSummry} component={ECart} />

      {
        /*
   Funrel
        */
      }

      <Stack.Screen name={Nav.Funrel} component={Funrel} />
      <Stack.Screen name={Nav.Jobs} component={Jobs} />
      <Stack.Screen name={Nav.Apply} component={JObApply} />
      <Stack.Screen name={Nav.Videos} component={Videos} />
      <Stack.Screen name={Nav.Quiz} component={Quiz} />
      <Stack.Screen name={Nav.Business} component={Business} />
      <Stack.Screen name={Nav.Affilation} component={Affilation} />
      <Stack.Screen name={Nav.Articles} component={Articles} />
      <Stack.Screen name={Nav.ArticlesPage} component={ArticlesPage} />
      <Stack.Screen name={Nav.OPD} component={OPD} />
      <Stack.Screen name={Nav.OPDHome} component={OPDHome} />
      <Stack.Screen name={Nav.OPDCategories} component={OPDCategories} />
      <Stack.Screen name={Nav.OPDTest} component={OPDTest} />
      <Stack.Screen name={Nav.News} component={News} />
    </Stack.Navigator>
  );

}