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
    },
    // cộng thêm cho tọa đô x,y khi hiển thị contextmenu
    getbounding: {
        x: 70,
        y: 15,
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

    // khoảng cách với cha nó
    SpaceWithParent: {
        IsParent: 120,
        IsNotParent: 130,
    },

    // mode danh sách tài khoản
    ModeListAccount: {
        Collapse: 0,
        Expand: 1,
    },
};

export default MISAEnum;
