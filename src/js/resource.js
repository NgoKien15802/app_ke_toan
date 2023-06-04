const MISAResouce = {
    vi: {
        // Employee
        Employee: "Nhân viên",
        AddNewEmployee: "Thêm",
        EmployeeCode: "Mã nhân viên",
        FullName: "Tên nhân viên",
        Gender: "Giới tính",
        DateOfBirth: "Ngày sinh",
        IdentityNumber: "Số CMND",
        PositionName: "Chức danh",
        DepartmentName: "Tên đơn vị",
        BankAccount: "Số tài khoản",
        BankName: "Tên ngân hàng",
        BankBranch: "Chi nhánh TK ngân hàng",

        // Feature
        Feature: "Chức năng",
        feature: "Chức năng",
        Fix: "Sửa",
        Show: "Xem",
        Duplicate: "Nhân bản",
        StopUsing: "Ngừng sử dụng",
        Using: "Đang sử dụng",
        Use: "Sử dụng",
        Delete: "Xoá",
        Merge: "Gộp",

        // Record
        TotalNumber: "Tổng số",
        Record: "bản ghi",
        Total: "Tổng",

        // Error message
        ErrorEmpty: " không được để trống",
        ErrorInvalid: " không đúng định dạng",
        ErrorDate: " không được lớn hơn hiện tại!",
        ErrorAccountNumber: " phải có độ dài >= 3 ký tự",
        ErrorAccountNumberStartWith: " phải bắt đầu bằng tài khoản tổng hợp",
        ErrorEmail: " không đúng định dạng",
        ErrorNotNumber: " không phải là số, vui lòng nhập lại là số",
        ErrorNotText: " không phải là chữ, vui lòng nhập lại là chữ",

        // Paging
        Previous: "Trước",
        Next: "Sau",
        RecordInPage: "bản ghi trên 1 trang",

        //placehoder
        TxtSearch: "Tìm kiếm",
        TxtSearchEmployee: "Tìm kiếm mã, tên, số điện thoại",
        TxtSearchAccount: "Tìm kiếm theo số, tên tài khoản",
        TxtConditionFilter: "Nhập giá trị lọc",
        Filter: "Lọc",
        Unfiltered: "Bỏ lọc",
        Contain: "Chứa",
        FixThisColumn: "Cố định cột này",
        Quantity: "Số lượng",

        //Sidebar
        Overview: "Tổng quan",
        Cash: "Tiền mặt",
        Banking: "Tiền gửi",
        Buy: "Mua hàng",
        Sales: "Bán hàng",
        InvoiceManaging: "Quản lí hoá đơn",
        Store: "Kho",
        Equipments: "Công cụ dụng cụ",
        FixedAssets: "Tài sản cố định",
        Tax: "Thuế",
        CostOfProduction: "Giá thành",
        General: "Tổng hợp",
        Budget: "Ngân sách",
        Report: "Báo cáo",
        FinancialAnalysis: "Phân tích tài chính",
        QuickAdd: "Thêm nhanh",

        // tooltip
        TooltipIdentityNumber: "Số chứng minh nhân dân",
        TooltipPhoneNumber: "Điện thoại di động",
        TooltipFixPhoneNumber: "Điện thoại cố định",
        TooltipHelp: "Giúp",
        TooltipClose: "Đóng (ESC)",
        TooltipSave: "Cất (ctrl + s)",
        TooltipSaveAndAdd: "Cất và thêm (ctrl + shift + s)",
        TooltipReload: "Lấy lại dữ liệu",
        TooltipExport: "Xuất ra Excel",
        TooltipCustomizeInterface: "Tùy chỉnh giao diện",
        ImplicitSampling: "Lấy mẫu ngầm định",

        // popup
        Enter: "Nhập",
        EmployeeInfo: "Thêm mới nhân viên",
        EditEmployeeInfo: "Sửa nhân viên",
        DuplicateEmployeeInfo: "Nhân bản nhân viên",
        Customer: "Là khách hàng",
        supplier: "Là nhà cung cấp",
        LabelEmployeeCode: "Mã",
        LabelEmployeeName: "Tên",
        LabelDepartmentName: "Đơn vị",
        LabelJobTitle: "Chức danh",
        LabelDateOfBirth: "Ngày sinh",
        LabelGender: "Giới tính",
        LabelMale: "Nam",
        LabelFemale: "Nữ",
        LabelOther: "Khác",
        LabelIdentityNumber: "Số CMND",
        LabelIdentityDate: "Ngày cấp",
        LabelIdentityPlace: "Nơi cấp",
        LabelAddress: "Địa chỉ",
        LabelPhoneNumber: "ĐT di động",
        LabelLandlineNumber: "ĐT cố định",
        LabelEmail: "Email",
        LabelBankAccount: "Tài khoản ngân hàng",
        LabelBankName: "Tên ngân hàng",
        LabelBankBranch: "Chi nhánh",

        // button
        BtnDestroy: "Hủy",
        BtnYes: "Có",
        BtnDestroyDialog: "Không",
        BtnDeleteDialog: "Xóa",
        BtnNo: "Không",
        BtnSaveEndAdd: "Cất và thêm",
        BtnSave: "Cất",
        BtnClose: "Đóng",
        BtnDeleteAll: "Xóa tất cả",
        BtnSaveData: "Lưu",
        BtnNoSave: "Không lưu",
        batchExecution: "Thực hiện hàng loạt",

        // title dialog
        DialogNotifyError: "Thông báo lỗi",
        DialogNotify: "Thông báo",
        DialogWarning: "Cảnh báo",
        MessageNotify: "Dữ liệu đã thay đổi. Bạn có muốn cất không?",
        MessageWarning: "Bạn có muốn xóa nhân viên ",
        MessageWarningAccount: "Bạn có muốn xóa tài khoản ",
        MessageUpdateAccount:
            'Bạn có muốn thiết lập trạng thái "Sử dụng" cho tất cả <Tài khoản> con không?',
        MessageWarningMul: "Bạn có muốn xóa tất cả nhân viên được chọn",
        TxtNo: "không",
        DialogNotifyErrorDelete: "Xoá không thành công",
        MessageErrorDeleteAccount:
            "Xóa không thành công. Không thể xóa danh mục cha nếu chưa xóa danh mục con.",

        MessageErrorNoUpdateState:
            ' cha đang ở trạng thái "Ngừng sử dụng". Bạn không thể thiết lập trạng thái "Sử dụng" cho con ',

        // toast
        ToastAddSuccess: "Nhân viên đã được thêm",
        ToastDeleteSuccess: "Nhân viên đã bị xóa",
        ToastEditSuccess: "Nhân viên đã được sửa",
        ToastDuplicateSuccess: "Nhân viên đã được nhân bản",
        ToastTitleSuccess: "Thành công",

        ToastAddSuccessAccount: "Tài khoản đã được thêm",
        ToastDeleteSuccessAccount: "Tài khoản đã bị xóa",
        ToastEditSuccessAccount: "Tài khoản đã được sửa",
        ToastDuplicateSuccessAccount: "Tài khoản đã được nhân bản",
        ToastUpdateState: "Tài khoản đã được cập nhật sang ",
        ToastUpdateStateForAll: " cho tất cả",
        ToastUpdateStateOnlyParent: " chỉ cho cha",

        // checkbox
        SelectedCheckbox: "Đã chọn: ",
        UndoSelected: "Bỏ chọn",
        SelectAllPage: "Chọn tất cả các trang",

        NoData: "Không có dữ liệu hiển thị",
        DataColumnName: "Tên cột dữ liệu",
        FixColumn: "Sửa tên cột hiển thị và độ rộng",
        ShowMore: "Hiển thị thêm",
        ColNameOnInterface: "Tên cột trên giao diện",
        ColWidth: "Độ rộng",
        FixedCol: "Cố định cột",

        //navbar cash
        Process: "Quy trình",
        Payment: "Chi tiền",
        ReceiveMoney: "Thu tiền",
        Stocktaking: "Kiểm kê",
        CashFlowForecast: "Dự báo dòng tiền",
        Export: "Báo cáo",

        // contextMenu
        Empty: "Trống",
        NotEmpty: "(Không trống)",
        Equal: "Bằng",
        Other: "Khác",
        NotContain: "Không chứa",
        StartWith: "Bắt đầu với",
        EndWith: "Kết thúc với",
        LessThan: "Nhỏ hơn",
        LessThanOrEqual: "Nhỏ hơn hoặc bằng",
        GreaterThan: "Lớn hơn",
        GreaterThanOrEqual: "Lớn hơn hoặc bằng",
        DeleteConditionFilter: "Xóa điều kiện lọc",

        // cash
        CashBusiness: "Nghiệp vụ tiền mặt",
        AccountSystem: "Hệ thống tài khoản",
        CustomerCash: "Khách hàng",
        Provider: "Nhà cung cấp",
        Option: "Tùy chọn",

        // accountSysterm
        AddNewAccount: "Thêm tài khoản",
        EditNewAccount: "Sửa tài khoản",
        DuplicateNewAccount: "Nhân bản tài khoản",
        Extend: "Mở rộng",
        Collapse: "Thu gọn",
        AccountNumber: "Số tài khoản",
        AccountName: "Tên tài khoản",
        Property: "Tính chất",
        EnglishName: "Tên tiếng anh",
        journal_memo: "Diễn giải",
        Status: "Trạng thái",
        Debt: "Dư nợ",
        ExcessYes: "Dư có",
        Hermaphrodite: "Lưỡng tính",
        Nobalance: "Không có số dư",
        account_number: "Số tài khoản",
        account_name: "Tên tài khoản",
        account_category_kind: "Tính chất",
        account_name_english: "Tên tiếng anh",
        description: "Diễn giải",
        state: "Trạng thái",

        // popup Account
        LabelAccountNumber: "Số tài khoản",
        LabelAccountName: "Tên tài khoản",
        LabelEnglishName: "Tên tiếng anh",
        LabelGeneralAccount: "Tài khoản tổng hợp",
        LabelProperty: "Tính chất",
        Labeljournal_memo: "Diễn giải",
        ForeignCurrencyPlan: "Có hạch toán ngoại tệ",
        Object: "Đối tượng",

        followDetail: "Theo dõi chi tiết theo",
        Account: "Tài khoản",
        TransferAccountingAccounts: "Chuyển tài khoản hoạch toán",

        // chưa có english
        Detail_by_job: "Đối tượng THCP",
        Detail_by_job_tooltip: "Đối tượng tổ hợp chi phí",
        Detail_by_order: "Đơn đặt hàng",
        Detail_by_pu_contract: "Hợp đồng mua",
        Detail_by_department: "Đơn vị",
        Detail_by_bank_account: "Tài khoản ngân hàng",
        Detail_by_project_work: "Công trình",
        Detail_by_contract: "Hợp đồng bán",
        Detail_by_expense_item: "Khoản mục CP",
        Detail_by_expense_item_tooltip: "Khoản mục chi phí",
        Detail_by_list_item: "Mã thống kê",
        Warning_only: "Chỉ cảnh báo",
        Require_type: "Bắt buộc nhập",

        //table payment
        Tutorial: "Hướng dẫn",
        AddNewPayment: "Chi tiền",
        posted_date: "Ngày hạch toán",
        ref_date: "Ngày chứng từ",
        refno_finance: "Số chứng từ",
        total_amount: "Số tiền",
        supplier_code: "Mã đối tượng",
        Address: "Địa chỉ",
        supplier_name: "Đối tượng",
        Detail: "Chi tiết",
        DebitAccount: "TK nợ",
        CreditAccount: "TK có",
        ObjectName: "Tên đối tượng",
        PaymentTitle: "Phiếu chi",
        supplier_address: "Địa chỉ",

        // payment detail // chưa có english
        Labelsupplier_code: "Mã đối tượng",
        LabelObjectName: "Tên đối tượng",
        LabelReceiver: "Người nhận",
        LabelPaymentReason: "Lý do chi",
        LabelEmployee: "Nhân viên",
        Labelposted_date: "Ngày hạch toán",
        LabelPaymentDate: "Ngày phiếu chi",
        LabelPaymentNumber: "Số phiếu chi",
        LabelAttach: "Kèm theo",
        LabelTotalMoney: "Tổng tiền",
        LabelOriginalVouchers: "Chứng từ gốc",
        LabelReference: "Tham chiếu",
        LabelAccounting: "Hạch toán",
        AddLine: "Thêm dòng",
        DeleteAllLine: "Xóa hết dòng",

        //other
        Username: "Ngô Trung Kiên",
        MyCompany: "công ty tnhh sản xuất - thương mại - dịch vị qui phúc",
    },
    en: {
        // Employee
        Employee: "Employee",
        AddNewEmployee: "Add",
        EmployeeCode: "Employee code",
        FullName: "Employee name",
        Gender: "Gender",
        DateOfBirth: "Date of birth",
        IdentityNumber: "Identity number",
        PositionName: "Position Name",
        DepartmentName: "Department name",
        BankAccount: "Bank account",
        BankName: "Bank name",
        BankBranch: "Bank branch",

        // Feature
        Feature: "Feature",
        feature: "Feature",
        Fix: "Edit",
        Show: "Show",
        Duplicate: "Duplicate",
        StopUsing: "Stop using",
        Using: "Using",
        Use: "Use",
        Delete: "Delete",
        Merge: "Merge",

        // Record
        TotalNumber: "Total number",
        Record: "records",
        Total: "Total",

        // Error message
        ErrorEmpty: " cannot be left blank, please re-enter",
        ErrorInvalid: " cannot format, please re-enter",
        ErrorDate: " isn't greater than current!",
        ErrorNotNumber: " not a number, please re-enter",
        ErrorNotText: " not the word, please re-enter",
        ErrorEmail: " Incorrect format",
        ErrorAccountNumber: " must be >= 3 characters in length!",
        ErrorAccountNumberStartWith: " must start with a general account",

        // Paging
        Previous: "Previous",
        Next: "Next",
        RecordInPage: "Records in a page",

        //placehoder
        TxtSearch: "Search",
        TxtSearchEmployee: "Search by ID, name, phone number",
        TxtSearchAccount: "Search by number, account name",
        TxtConditionFilter: "Enter filter value",
        Filter: "Filter",
        Unfiltered: "Unfiltered",
        Contain: "Contain",
        FixThisColumn: "Fix this column",
        Quantity: "Quantity",

        //Sidebar
        Overview: "Overview",
        Cash: "Cash",
        Banking: "Banking",
        Buy: "Buy",
        Sales: "Sales",
        InvoiceManaging: "Invoice managing",
        Store: "Store",
        Equipments: "Equipments",
        FixedAssets: "Fixed assets",
        Tax: "Tax",
        CostOfProduction: "Cost of production",
        General: "General",
        Budget: "Budget",
        Report: "Report",
        FinancialAnalysis: "Financial analysis",
        QuickAdd: "Quick add",

        // popup
        EmployeeInfo: "Add new employee",
        EditEmployeeInfo: "Edit employee infomation",
        DuplicateEmployeeInfo: "Employee duplicate",
        Customer: "Is a customer",
        supplier: "Is a supplier",
        LabelEmployeeCode: "ID",
        LabelEmployeeName: "Name",
        LabelDepartmentName: "Department",
        LabelJobTitle: "Job title",
        LabelDateOfBirth: "Date of birth",
        LabelGender: "Gender",
        LabelMale: "Male",
        LabelFemale: "Female",
        LabelOther: "Other",
        LabelIdentityNumber: "Identity Number",
        LabelIdentityDate: "Identity date",
        LabelIdentityPlace: "Identity place",
        LabelAddress: "Address",
        LabelPhoneNumber: "Phone number",
        LabelLandlineNumber: "Landline Number",
        LabelEmail: "Email",
        LabelBankAccount: "Bank account",
        LabelBankName: "Bank name",
        LabelBankBranch: "Bank branch",

        TooltipIdentityNumber: "Identity number",
        TooltipPhoneNumber: "Phone number",
        TooltipFixPhoneNumber: "Landline number",
        TooltipHelp: "Help",
        TooltipClose: "Close (ESC)",
        TooltipSave: "Save (ctrl + s)",
        TooltipSaveAndAdd: "Save and add (ctrl + shift + s)",
        TooltipReload: "Data recovery",
        TooltipExport: "Export excel",
        TooltipCustomizeInterface: "Customize interface",
        ImplicitSampling: "Implicit sampling",

        // button
        BtnDestroy: "Destroy",
        BtnSaveEndAdd: "Save and add",
        BtnDestroyDialog: "No",
        BtnDeleteDialog: "Delete",
        BtnSave: "Save",
        BtnClose: "Close",
        BtnYes: "Yes",
        BtnNo: "No",
        BtnDeleteAll: "Delete all",
        BtnSaveData: "Save",
        BtnNoSave: "Don't save",
        batchExecution: "batch execution",

        // title dialog
        DialogNotifyError: "Error! ",
        DialogWarning: "Warning",
        DialogNotify: "Notification",

        MessageNotify: "Data has changed. Do you want to save it?",
        MessageWarning: "Do you want to delete an employee ",
        MessageWarningAccount: "Do you want to delete account ",
        MessageUpdateAccount:
            'Do you want to set "Using" status for all <Account> children?',
        MessageWarningMul: "Do you want to delete all selected employees ",
        TxtNo: "no",
        DialogNotifyErrorDelete: "Delete failed",
        MessageErrorDeleteAccount:
            "Delete failed. The parent category cannot be deleted without deleting the child category.",

        MessageErrorNoUpdateState:
            'parent is in the "Discontinued" state. You cannot set the "Using" status for your child',
        // toast
        ToastAddSuccess: "Staff has been added",
        ToastDeleteSuccess: "Employee has been deleted",
        ToastEditSuccess: "Staff has been edited",
        ToastDuplicateSuccess: "Staff has been duplicated",
        ToastTitleSuccess: "Success",

        ToastAddSuccessAccount: "Account has been added",
        ToastDeleteSuccessAccount: "Account has been deleted",
        ToastEditSuccessAccount: "Account has been edited",
        ToastDuplicateSuccessAccount: "Account has been duplicated",
        ToastUpdateState: "The account has been updated to ",
        ToastUpdateStateForAll: " for all",
        ToastUpdateStateOnlyParent: " only parent",

        NoData: "No data to show",
        DataColumnName: "Data column name",
        FixColumn: "Fix display column name and width",
        ShowMore: "Show more",
        ColNameOnInterface: "Column names on interface",
        ColWidth: "Width",
        FixedCol: "Fixed column",

        //navbar cash
        Process: "Progress",
        Payment: "Payment",
        ReceiveMoney: "Receive money",
        Stocktaking: "StockTaking",
        CashFlowForecast: "Cash flow forecast",
        Export: "Export",

        // contextMenu
        Empty: "Empty",
        NotEmpty: "(NotEmpty)",
        Equal: "Equal",
        Other: "Other",
        NotContain: "Not contain",
        StartWith: "Start with",
        EndWith: "End With",
        LessThan: "Less than",
        LessThanOrEqual: "Less than or equal",
        GreaterThan: "Greater than",
        GreaterThanOrEqual: "Greater than or equal",
        DeleteConditionFilter: "Delete condition filter",

        // cash
        CashBusiness: "Cash Business",
        AccountSystem: "Account systerm",
        CustomerCash: "Customer",
        Provider: "Provider",
        Option: "Options",
        Extend: "Extend",
        Collapse: "Collapse",
        AddNewAccount: "Add account",
        EditNewAccount: "Edit account",
        DuplicateNewAccount: "Duplicate account",
        AccountNumber: "Account number",
        AccountName: "Account name",
        Property: "Property",
        EnglishName: "English name",
        journal_memo: "Interpret",
        Status: "Status",
        Debt: "Debt",
        ExcessYes: "Excess yes",
        Hermaphrodite: "Hermaphrodite",
        Nobalance: "No balance",
        account_number: "Account number",
        account_name: "Account name",
        account_category_kind: "Property",
        account_name_english: "English name",
        description: "Interpret",
        state: "Status",

        // popup account
        LabelAccountNumber: "Account number",
        LabelAccountName: "Account name",
        LabelEnglishName: "English name",
        LabelGeneralAccount: "General account",
        LabelProperty: "Property",
        Labeljournal_memo: "Interpret",
        ForeignCurrencyPlan: "Have a foregin currency plan",
        Object: "Object",
        followDetail: "Track tracking details",
        supplier_name: "Object",
        Account: "Account",
        TransferAccountingAccounts: "Transfer accounting accounts",

        // checkbox
        SelectedCheckbox: "selected: ",
        UndoSelected: "Undo Selected",
        SelectAllPage: "Selete all page",

        Detail_by_job: "Subject THCP",
        Detail_by_job_tooltip: "Cost combination object",
        Detail_by_order: "The order",
        Detail_by_pu_contract: "Purchase contract",
        Detail_by_department: "Department",
        Detail_by_bank_account: "Bank account",
        Detail_by_project_work: "Construction",
        Detail_by_contract: "Contract of sale",
        Detail_by_expense_item: "CP Item",
        Detail_by_expense_item_tooltip: "Expense item",
        Detail_by_list_item: "Statistical Code",
        Warning_only: "Warning only",
        Require_type: "Required",

        //table payment
        AddNewPayment: "Payment",
        posted_date: "Accounting date",
        ref_date: "Day vouchers",
        refno_finance: "Number vouchers",
        total_amount: "Amount of money",
        supplier_code: "Object code",
        Address: "Address",
        Detail: "Detail",
        DebitAccount: "Debit account",
        CreditAccount: "Credit account",
        ObjectName: "Object name",
        PaymentTitle: "Payment",
        supplier_address: "Address",

        // payment detail
        Tutorial: "Tutorial",
        Labelsupplier_code: "Object code",
        LabelObjectName: "Subject name",
        LabelReceiver: "Receiver",
        LabelPaymentReason: "Reasons to spend money",
        LabelEmployee: "Employee",
        Labelposted_date: "Accounting date",
        LabelPaymentDate: "Payment date",
        LabelPaymentNumber: "Votes cast",
        LabelAttach: "Attach",
        LabelTotalMoney: "Total amount",
        LabelOriginalVouchers: "Original documents",
        LabelReference: "Reference",
        LabelAccounting: "Accounting",
        AddLine: "Add line",
        DeleteAllLine: "Delete all lines",

        //other
        Username: "Kien Ngo Trung",
        MyCompany: "Quy Phuc Production - Trading - Service",
    },
};
export default MISAResouce;
