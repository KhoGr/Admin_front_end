// Import thư viện React để sử dụng React components
import React from 'react'

// Import các component UI từ thư viện CoreUI React
import {
  CAvatar, // Component hiển thị ảnh đại diện (avatar)
  CBadge, // Component hiển thị huy hiệu (badge) trên các mục menu
  CDropdown, // Component dropdown chứa các mục menu
  CDropdownDivider, // Component tạo đường phân cách trong dropdown
  CDropdownHeader, // Component hiển thị phần tiêu đề trong dropdown
  CDropdownItem, // Component hiển thị các mục menu có thể nhấn
  CDropdownMenu, // Component chứa danh sách các mục menu
  CDropdownToggle, // Component dùng để kích hoạt dropdown
} from '@coreui/react'

// Import các biểu tượng (icons) từ thư viện CoreUI Icons
import {
  cilBell, // Icon thông báo (chuông)
  cilCreditCard, // Icon thẻ thanh toán
  cilCommentSquare, // Icon bình luận
  cilEnvelopeOpen, // Icon tin nhắn (email)
  cilFile, // Icon tập tin (file)
  cilLockLocked, // Icon khóa tài khoản
  cilSettings, // Icon cài đặt
  cilTask, // Icon công việc (task)
  cilUser, // Icon người dùng
} from '@coreui/icons'

// Import component CIcon từ thư viện CoreUI Icons React để hiển thị icon
import CIcon from '@coreui/icons-react'

// Import hình ảnh đại diện từ thư mục assets
import avatar8 from './../../assets/images/avatars/8.jpg'

// Component AppHeaderDropdown hiển thị dropdown trong phần header của ứng dụng
const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      {/* Nút mở dropdown chứa avatar người dùng */}
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>

      {/* Danh sách menu trong dropdown */}
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* Header của phần Account */}
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>

        {/* Mục cập nhật (Updates) */}
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>

        {/* Mục tin nhắn (Messages) */}
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>

        {/* Mục công việc (Tasks) */}
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>

        {/* Mục bình luận (Comments) */}
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>

        {/* Header của phần Settings */}
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>

        {/* Mục hồ sơ cá nhân (Profile) */}
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>

        {/* Mục cài đặt (Settings) */}
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>

        {/* Mục thanh toán (Payments) */}
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>

        {/* Mục dự án (Projects) */}
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>

        {/* Đường phân cách giữa các mục */}
        <CDropdownDivider />

        {/* Mục khóa tài khoản (Lock Account) */}
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

// Xuất component để sử dụng ở các phần khác trong ứng dụng
export default AppHeaderDropdown
