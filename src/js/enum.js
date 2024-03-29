const MISAEnum = {
    // giới tính
    Gender: {
        Male: 0,
        Female: 1,
        Other: 2,
    },
    // trạng thái form: thêm, sửa, nhân bản
    formMode: {
        Add: 0,
        Edit: 1,
        Duplicate: 2,
        Show:3
    },
    // cộng thêm cho tọa đô x,y khi hiển thị contextmenu
    getbounding: {
        x: 70,
        y: 15,
    },

    getboundingAccount: {
        x: 182,
        y: 20,
    },

    // Trạng thái: ngừng sử dụng, đang sử dụng
    Status: {
        StopUsing: 0,
        Using: 1,
    },

    // Tính chất
    Property: {
        Debt: 0,
        ExcessYes: 1,
        Hermaphrodite: 2,
        Nobalance: 3,
    },

    // đối tượng
    Object_kind: {
        Supplier: 0,
        Customer: 1,
        Employee: 2,
    },

    Account_dropdown: {
        Warning_only: 0,
        Require_type: 1,
    },

    // khoảng cách với cha nó
    SpaceWithParent: {
        IsParent: 120,
        IsNotParent: 120,
    },

    // mode danh sách tài khoản
    ModeListAccount: {
        Collapse: 0,
        Expand: 1,
    },

    // mode btn popup payment
    ModeBtn: {
        SaveAndAdd: 0,
        SaveAndClose: 1
    },

    
};

export default MISAEnum;
