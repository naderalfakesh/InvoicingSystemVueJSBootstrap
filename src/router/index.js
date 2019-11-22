import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')
// my views
// company
const companyIndex = () => import('@/views/companies/companyIndex')
const companyCreate = () => import('@/views/companies/companyCreate')
const companyView = () => import('@/views/companies/companyView')
// contact
const contactIndex = () => import('@/views/contacts/contactIndex')
const contactCreate = () => import('@/views/contacts/contactCreate')
const contactView = () => import('@/views/contacts/contactView')
// invoice
const invoiceIndex = () => import('@/views/invoices/invoiceIndex')
const invoiceCreate = () => import('@/views/invoices/invoiceCreate')
const invoiceView = () => import('@/views/invoices/invoiceView')
// lsd
const lsdIndex = () => import('@/views/lsds/lsdIndex')
const lsdCreate = () => import('@/views/lsds/lsdCreate')
const lsdView = () => import('@/views/lsds/lsdView')
// nameplate
const nameplateIndex = () => import('@/views/nameplates/nameplateIndex')
const nameplateCreate = () => import('@/views/nameplates/nameplateCreate')
const nameplateView = () => import('@/views/nameplates/nameplateView')
// offer
const offerIndex = () => import('@/views/offers/offerIndex')
const offerCreate = () => import('@/views/offers/offerCreate')
const offerView = () => import('@/views/offers/offerView')
// product
const productIndex = () => import('@/views/products/productIndex')
const productCreate = () => import('@/views/products/productCreate')
const productView = () => import('@/views/products/productView')
// purchase
const purchaseIndex = () => import('@/views/purchases/purchaseIndex')
const purchaseCreate = () => import('@/views/purchases/purchaseCreate')
const purchaseView = () => import('@/views/purchases/purchaseView')
// rewind
const rewindIndex = () => import('@/views/rewinds/rewindIndex')
const rewindCreate = () => import('@/views/rewinds/rewindCreate')
const rewindView = () => import('@/views/rewinds/rewindView')
// service
const serviceIndex = () => import('@/views/services/serviceIndex')
const serviceCreate = () => import('@/views/services/serviceCreate')
const serviceView = () => import('@/views/services/serviceView')
//independent invoice view
const fullInvoice = () => import('@/views/invoices/fullInvoice.vue')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'companyIndex',
          name: 'companyIndex',
          component: companyIndex,
          meta: {label:'Şirketler'}
        },
        {
          path: 'companyCreate',
          name: 'companyCreate',
          component: companyCreate,
          props : true,
          meta: {label:'Şirketler'}
        },
        {
          path: 'companyView',
          name: 'companyView',
          component: companyView,
          props : true,
          meta: {label:'Şirketler'}
        },
        {
          path: 'contactIndex',
          name: 'contactIndex',
          component: contactIndex,
          meta: {label:'Kontaklar'}
        },
        {
          path: 'contactCreate',
          name: 'contactCreate',
          component: contactCreate,
          props : true,
          meta: {label:'Kontaklar'}
        },
        {
          path: 'contactView',
          name: 'contactView',
          component: contactView,
          props : true,
          meta: {label:'Kontaklar'}
        },
        {
          path: 'invoiceIndex',
          name: 'invoiceIndex',
          component: invoiceIndex,
          meta: {label:'Faturalar'}
        },
        {
          path: 'invoiceCreate',
          name: 'invoiceCreate',
          component: invoiceCreate,
          props : true,
          meta: {label:'Faturalar'}
        },
        {
          path: 'invoiceView',
          name: 'invoiceView',
          component: invoiceView,
          props : true,
          meta: {label:'Faturalar'}
        },
        {
          path: 'lsdIndex',
          name: 'lsdIndex',
          component: lsdIndex,
          meta: {label:'Sulu yol vericiler'}
        },
        {
          path: 'lsdCreate',
          name: 'lsdCreate',
          component: lsdCreate,
          props : true,
          meta: {label:'Sulu yol vericiler'}
        },
        {
          path: 'lsdView',
          name: 'lsdView',
          component: lsdView,
          props : true,
          meta: {label:'Sulu yol vericiler'}
        },
        {
          path: 'nameplateIndex',
          name: 'nameplateIndex',
          component: nameplateIndex,
          meta: {label:'Etiketler'}
        },
        {
          path: 'nameplateCreate',
          name: 'nameplateCreate',
          component: nameplateCreate,
          props : true,
          meta: {label:'Etiketler'}
        },
        {
          path: 'nameplateView',
          name: 'nameplateView',
          component: nameplateView,
          props : true,
          meta: {label:'Etiketler'}
        },
        {
          path: 'offerIndex',
          name: 'offerIndex',
          component: offerIndex,
          meta: {label:'Teklifler'}
        },
        {
          path: 'offerCreate',
          name: 'offerCreate',
          component: offerCreate,
          props : true,
          meta: {label:'Teklifler'}
        },
        {
          path: 'offerView',
          name: 'offerView',
          component: offerView,
          props : true,
          meta: {label:'Teklifler'}
        },
        {
          path: 'productIndex',
          name: 'productIndex',
          component: productIndex,
          meta: {label:'Ürünler'}
        },
        {
          path: 'productCreate',
          name: 'productCreate',
          component: productCreate,
          props : true,
          meta: {label:'Ürünler'}
        },
        {
          path: 'productView',
          name: 'productView',
          component: productView,
          props : true,
          meta: {label:'Ürünler'}
        },
        {
          path: 'purchaseIndex',
          name: 'purchaseIndex',
          component: purchaseIndex,
          meta: {label:'Satımnalmalar'}
        },
        {
          path: 'purchaseCreate',
          name: 'purchaseCreate',
          component: purchaseCreate,
          props : true,
          meta: {label:'Satımnalmalar'}
        },
        {
          path: 'purchaseView',
          name: 'purchaseView',
          component: purchaseView,
          props : true,
          meta: {label:'Satımnalmalar'}
        },
        {
          path: 'rewindIndex',
          name: 'rewindIndex',
          component: rewindIndex,
          meta: {label:'Sarımlar'}
        },
        {
          path: 'rewindCreate',
          name: 'rewindCreate',
          component: rewindCreate,
          props : true,
          meta: {label:'Sarımlar'}
        },
        {
          path: 'rewindView',
          name: 'rewindView',
          component: rewindView,
          props : true,
          meta: {label:'Sarımlar'}
        },
        {
          path: 'serviceIndex',
          name: 'serviceIndex',
          component: serviceIndex,
          meta: {label:'Servisler'}
        },
        {
          path: 'serviceCreate',
          name: 'serviceCreate',
          component: serviceCreate,
          props : true,
          meta: {label:'Servisler'}
        },
        {
          path: 'serviceView',
          name: 'serviceView',
          component: serviceView,
          props : true,
          meta: {label:'Servisler'}
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'fullInvoice',
          name: 'fullInvoice',
          component: fullInvoice,
          meta: {label:'fullInvoice'}
        },
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})
