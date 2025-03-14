//hiển thị breadcrumb navigation
import React from 'react'
import { useLocation } from 'react-router-dom' // lấy đường dẫn hiện tại

import routes from '../../configs/routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react' // Import các component Breadcrumb

const AppBreadcrumb = () => {
  // Lấy đường dẫn hiện tại của trang

  const currentLocation = useLocation().pathname
  /**
   * Hàm tìm tên route tương ứng với đường dẫn
   * @param {string} pathname - Đường dẫn hiện tại
   * @param {Array} routes - Danh sách các route trong ứng dụng
   * @returns {string|boolean} - Trả về tên route nếu tìm thấy, nếu không trả về `false`
   */
  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }
  /**
   * Hàm tạo danh sách breadcrumb từ đường dẫn hiện tại
   * @param {string} location - Đường dẫn hiện tại
   * @returns {Array} - Danh sách breadcrumb với thông tin pathname, name và trạng thái active
   */
  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      // Nếu tìm thấy tên route, thêm vào danh sách breadcrumb

      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }
  // Tạo danh sách breadcrumb dựa trên đường dẫn hiện tại

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
