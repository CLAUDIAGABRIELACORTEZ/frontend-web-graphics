import { PrivateRoutes } from '@/models/routes.model'
import { PERMISSION } from '@/modules/auth/utils/permissions.constants'
import { LibraryBig,School,HomeIcon, KeyIcon, PackageIcon, ShoppingCart, Tag, UserCogIcon, UserIcon, UsersIcon } from 'lucide-react'
import { createElement } from 'react'

export interface MenuHeaderRoute {
  path?: string
  label: string
  icon?: JSX.Element
  children?: MenuHeaderRoute[]
  permissions?: PERMISSION[]
}

export const MenuSideBar: MenuHeaderRoute[] = [
  {
    label: 'DASHBOARD',
    icon: createElement(HomeIcon, { width: 20, height: 20 }),
    path: PrivateRoutes.DASHBOARD,
    permissions: [PERMISSION.USER, PERMISSION.USER_SHOW, PERMISSION.ROLE, PERMISSION.ROLE_SHOW, PERMISSION.PERMISSION, PERMISSION.PERMISSION_SHOW],
    children: [
      {
        path: '/usuarios',
        label: 'Usuarios',
        icon: createElement(HomeIcon, { width: 20, height: 20 }),
        permissions: [PERMISSION.USER, PERMISSION.USER_SHOW]
      },
      {
        path: '/usuarios/clientes',
        label: 'Clientes',
        icon: createElement(UsersIcon, { width: 20, height: 20 }),
        permissions: [PERMISSION.USER, PERMISSION.USER_SHOW]
      },
      {
        path: '/usuarios/roles',
        label: 'Roles',
        icon: createElement(UserIcon, { width: 20, height: 20 }),
        permissions: [PERMISSION.ROLE, PERMISSION.ROLE_SHOW]
      },
      {
        path: '/usuarios/permisos',
        label: 'Permisos',
        icon: createElement(KeyIcon, { width: 20, height: 20 }),
        permissions: [PERMISSION.PERMISSION, PERMISSION.PERMISSION_SHOW]
      }
    ]
  },
  {
    label: 'Facultades',
    icon: createElement(School, { width: 20, height: 20 }),
    path: PrivateRoutes.FACULTAD,
    permissions: [PERMISSION.PRODUCT, PERMISSION.PRODUCT_SHOW, PERMISSION.CATEGORY, PERMISSION.CATEGORY_SHOW],
    // children: [
    //   {
    //     path: PrivateRoutes.PRODUCT,
    //     label: 'Productos',
    //     icon: createElement(PackageIcon, { width: 20, height: 20 }),
    //     permissions: [PERMISSION.PRODUCT, PERMISSION.PRODUCT_SHOW]
    //   },
    //   {
    //     path: PrivateRoutes.CATEGORY,
    //     label: 'Categorías',
    //     icon: createElement(Tag, { width: 20, height: 20 }),
    //     permissions: [PERMISSION.CATEGORY, PERMISSION.CATEGORY_SHOW]
    //   },
    //   {
    //     path: PrivateRoutes.RESERVAS,
    //     label: 'Reservas',
    //     icon: createElement(CalendarClock, { width: 20, height: 20 }),
    //     permissions: [PERMISSION.CATEGORY, PERMISSION.CATEGORY_SHOW]
    //   }
    // ]
  },
  {
    label: 'Carreras',
    icon: createElement(LibraryBig, { width: 20, height: 20 }),
    path: '/pedidos/PrivateRoutes.PURCHASE_ORDER',
    permissions: [PERMISSION.PURCHASE_ORDER, PERMISSION.PURCHASE_ORDER_SHOW],
    // children: [
    //   {
    //     path: PrivateRoutes.PURCHASE_ORDER,
    //     label: 'Ordenes',
    //     icon: createElement(ShoppingCart, { width: 20, height: 20 }),
    //     permissions: [PERMISSION.PURCHASE_ORDER, PERMISSION.PURCHASE_ORDER_SHOW]
    //   }
    // ]
  },
 
]
