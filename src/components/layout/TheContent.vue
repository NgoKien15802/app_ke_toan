<template >
    <div class="content">
                    <div class="content__header">
                        <div class="content__header-title">
                            <h2 class="content__header-title-text heading">
                                Nhân viên
                            </h2>
                        </div>

                        <button id="addEmployee" class="btn btn-primary" fdprocessedid="h31unl">
                            Thêm mới nhân viên
                        </button>
                    </div>

                    <div class="content__main">
                        <div class="content__main-right">
                            <div class="content__main-filter">
                                <div class="input__wrapper">
                                    <button class="input__icon" fdprocessedid="sd2h6">
                                        <div class="input__icon-search"></div>
                                    </button>
                                    <input type="text" class="input__type input__search" placeholder="Tìm theo mã, tên nhân viên" fdprocessedid="q9kjmf">
                                </div>
                            </div>

                            <div class="content__main-refresh wrap-icon">
                                <div class="content__main-refresh-icon icon-normal-light icon-normal-light-hover"></div>
                            </div>
                        </div>

                        <div class="content__main-body scrollbar_customize">
                            <!-- begin table -->
                            <div class="content__main-table">
                                <!--<table class="employee">
                                    <thead>
                                        <tr class="table__field">
                                            <th class="text-align-center " model-name = "checkbox">
                                                <label for="" class="input__checkbox-wrapper">
                                                    <input type="checkbox" class="input__checkbox"  />
                                        
                                                    <span for="" class="ms__checkbox select__all-checkbox">
                                                        <span class="ms__border-checkbox">
                                                            <div for="" class="ms__checbox-icon"></div>
                                                        </span>
                                                    </span>
                                                </label>
                                            </th>
                                            <th class="text-align-center" model-name = "EmployeeCode">
                                                Mã nhân viên
                                            </th>
                                            <th class="text-align-center" model-name = "FullName">
                                                Tên nhân viên
                                            </th>
                                            <th class="text-align-center" model-name = "Gender">
                                                Giới tính
                                            </th>
                                            <th class="text-align-center" model-name = "DateOfBirth">
                                                Ngày sinh
                                            </th>
                                            <th
                                                class="text-align-center tooltip" model-name = "IdentityNumber"
                                            >
                                                Số CMND
                                                <span class="tooltiptext"
                                                    >Số chứng mình nhân
                                                    dân</span
                                                >
                                            </th>
                                            <th class="text-align-center" model-name = "PositionName">
                                                Chức danh
                                            </th>
                                            <th class="text-align-center" model-name ="DepartmentName">
                                                Tên đơn vị
                                            </th>
                                            <th class="text-align-center">
                                                Số tài khoản
                                            </th>
                                            <th class="text-align-center">
                                                Tên ngân hàng
                                            </th>
                                       
                                            <th class="text-align-center">
                                                Chi nhánh TK ngân hàng
                                            </th>
                                            <th class="text-align-center" model-name = "functionEdit">
                                                Chức năng
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="row__employee-report">
                                            <td class="text-align-center ">
                                                <label for="" class="input__checkbox-wrapper">
                                                    <input type="checkbox" class="input__checkbox " hidden />
                                        
                                                    <span for="" class="ms__checkbox select__checkbox-table">
                                                        <span class="ms__border-checkbox">
                                                            <div for="" class="ms__checbox-icon"></div>
                                                        </span>
                                                    </span>
                                                </label>
                                            </td>
                                            <td class="text-align-left">
                                                NV-123123
                                            </td>
                                            <td class="text-align-left">
                                                Ngô Trung Kiên
                                            </td>
                                            <td class="text-align-left">Nam</td>
                                            <td class="text-align-center">
                                                15/08/2002
                                            </td>
                                            <td class="text-align-left">
                                                036202007654
                                            </td>
                                            <td class="text-align-left">
                                                Nhân viên
                                            </td>
                                            <td class="text-align-left">
                                                Sản xuất
                                            </td>
                                            <td class="text-align-left">
                                                107872152374
                                            </td>
                                            <td class="text-align-left">
                                                viettinbank
                                            </td>
                                            <td class="text-align-left">
                                                Hà Nội
                                            </td>
                                            <td
                                                class="text-align-center dropdown-fun"
                                            >
                                                <button
                                                    class="link-btn btn-link-primary"
                                                >
                                                    Sửa
                                                </button>
                                                <div class="input__icon-box">
                                                    <div
                                                        class="icon-dropdown"
                                                    ></div>

                                                    
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                 -->
                                
                                 <div><table id="tbEmployeeList" class="employee">
                                            <thead>
                                            <tr class="table__field"><th class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></th><th class="text-align-center">Mã nhân viên</th><th class="text-align-center">Tên nhân viên</th><th class="text-align-center" style="min-width: 200px;">Giới tính</th><th class="text-align-center">Ngày sinh</th><th class="text-align-center tooltip">Số CMND<span class="tooltiptext">Số chứng minh nhân dân</span></th><th class="text-align-center">Chức danh</th><th class="text-align-center">Tên đơn vị</th><th class="text-align-center">Số tài khoản</th><th class="text-align-center">Tên ngân hàng</th><th class="text-align-center">Chi nhánh TK ngân hàng</th><th class="text-align-center">Chức năng</th></tr></thead>
                                            <tbody>
                                            <tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv011</td><td class="text-align-left">a</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="b4sj0g">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv010</td><td class="text-align-left">a</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="878d9m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv09</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="80wtmk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv08</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="plmvamp">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv07</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="a000er">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv06</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3i7wdl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv05</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="uvht4k">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv04</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="5xd49t">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv03</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/1/2001</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="zdzl8">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv02</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/1/2001</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="kuwhxd">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">nv01</td><td class="text-align-left">test</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/1/2001</td><td class="text-align-left">1234</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="imkcsu">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-78271</td><td class="text-align-left">fsdf</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ezp14r">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">df-4</td><td class="text-align-left">sdf</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="o10h">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">sd-45</td><td class="text-align-left">dfdfs</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ca4s5">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">sds-34</td><td class="text-align-left">ádasd</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="x6atsc">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV123456</td><td class="text-align-left">aaa</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="g8y8pl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-29515</td><td class="text-align-left">Nguyễn Văn Anh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/12/1965</td><td class="text-align-left">913657629462</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="bjudf">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-73122</td><td class="text-align-left">Đinh Thị Hà</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/1/1974</td><td class="text-align-left">494257448090</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="20ttcsd">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-64013</td><td class="text-align-left">Nguyễn Ánh Nguyệt</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">4/11/1955</td><td class="text-align-left">888723769331</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="039uw3">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-46584</td><td class="text-align-left">Nguyễn Văn Nhân</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/9/1990</td><td class="text-align-left">069744421632</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4voqp">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-22232</td><td class="text-align-left">Trương Thành Dương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/8/1990</td><td class="text-align-left">904030092587</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="6ylyir">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-07117</td><td class="text-align-left">Đinh Hưng Mạnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/9/1979</td><td class="text-align-left">548711502212</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2wym9m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-28378</td><td class="text-align-left">Trịnh Minh Lĩnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">6/8/1995</td><td class="text-align-left">611903664983</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2x57y9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-92931</td><td class="text-align-left">Vũ Linh Diễm</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/6/1996</td><td class="text-align-left">999994051367</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="wonuyn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-45138</td><td class="text-align-left">Hoàng Thanh Hằng</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/11/1954</td><td class="text-align-left">951400883477</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="knmrrg">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-93552</td><td class="text-align-left">Hoàng Ngọc Phú</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/10/1986</td><td class="text-align-left">759395786525</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="m1wq6m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-58793</td><td class="text-align-left">Nguyễn Ánh My</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/2/1956</td><td class="text-align-left">496023325505</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="i6t2vq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-01957</td><td class="text-align-left">Võ Thị Dương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/6/1993</td><td class="text-align-left">373172034175</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="bdn7vt">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-23306</td><td class="text-align-left">Trịnh Hưng Vinh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/2/1978</td><td class="text-align-left">215521422774</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="288yxv">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-79493</td><td class="text-align-left">Trần Thị Phương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/5/1966</td><td class="text-align-left">942410145104</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="cmtfvn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-19090</td><td class="text-align-left">Đinh Thị Châu</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/5/1978</td><td class="text-align-left">213374087771</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vmypsl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-35432</td><td class="text-align-left">Trịnh Thị Trâm</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/9/1963</td><td class="text-align-left">087642007240</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="h0xk1">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-48924</td><td class="text-align-left">Võ Văn An</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/11/1965</td><td class="text-align-left">784777929603</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="lrx4fe">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-83028</td><td class="text-align-left">Trần Văn Tuệ</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/11/1970</td><td class="text-align-left">188744856653</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="pb1ygm">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11133</td><td class="text-align-left">Vũ Đức Phan</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/2/1993</td><td class="text-align-left">805672491528</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="rudek">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-20448</td><td class="text-align-left">Hoàng Thị Hồng</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/2/1966</td><td class="text-align-left">040820543898</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="wxcdea">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11021</td><td class="text-align-left">Trần Trí Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/1/1964</td><td class="text-align-left">781310047138</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="344sbs">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-28275</td><td class="text-align-left">Hoàng Thị Tuệ</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/3/1993</td><td class="text-align-left">063172092209</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="34oybn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-80608</td><td class="text-align-left">Nông Minh Trung</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/8/1975</td><td class="text-align-left">669773050496</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="mq0lfk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-99853</td><td class="text-align-left">Hồ Văn Tùng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/8/1980</td><td class="text-align-left">053280209382</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="0vwjs">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-81668</td><td class="text-align-left">Nguyễn Văn Tuệ</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/8/1982</td><td class="text-align-left">404226135957</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="v6xkw9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-96684</td><td class="text-align-left">Hồ Văn Phi</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/6/1983</td><td class="text-align-left">027862054068</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vivgn4">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-00881</td><td class="text-align-left">Hoàng Thị Băng</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/1/1974</td><td class="text-align-left">870155569451</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="18w1fh">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-85337</td><td class="text-align-left">Trương Văn Nghiêm</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/9/1997</td><td class="text-align-left">726113955465</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="a5s0ke">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-14456</td><td class="text-align-left">Võ Thị Dương</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/9/1958</td><td class="text-align-left">836890735780</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vgy7i7">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-97235</td><td class="text-align-left">Trần Văn Tuệ</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/12/1987</td><td class="text-align-left">277509954188</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="8scwati">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-06860</td><td class="text-align-left">Nguyễn Kim Khuê</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/9/1990</td><td class="text-align-left">104864892967</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="osjczq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-23730</td><td class="text-align-left">Nguyễn Thị Hoài</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/4/1986</td><td class="text-align-left">734460718653</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="s4pyjb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-27307</td><td class="text-align-left">Vũ Thị Quyên</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/7/1991</td><td class="text-align-left">432153574363</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="5cny52">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-38328</td><td class="text-align-left">Hồ Đức Thái</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/9/1958</td><td class="text-align-left">984011258352</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2qvpl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-71578</td><td class="text-align-left">Nguyễn Vân Diệp</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/12/1954</td><td class="text-align-left">112768282652</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="cv0dc">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-66231</td><td class="text-align-left">Trương Thị Nhã</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/10/1974</td><td class="text-align-left">086296574455</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="nb88i">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-06614</td><td class="text-align-left">Nguyễn Linh Quỳnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/7/1999</td><td class="text-align-left">114953510954</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="prn7ee">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-77132</td><td class="text-align-left">Bùi Ánh Nghi</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/4/1977</td><td class="text-align-left">213883415730</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="m2z8m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-97854</td><td class="text-align-left">Nguyễn Tiến Nghiêm</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/2/1973</td><td class="text-align-left">751878762234</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="as17ms">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-60679</td><td class="text-align-left">Nguyễn Kim Quế</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/12/1953</td><td class="text-align-left">744716001468</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="dvsw1b">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-90382</td><td class="text-align-left">Nông Linh Khuê</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/5/1971</td><td class="text-align-left">858598394621</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="hwuvy4">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-34777</td><td class="text-align-left">Trần Văn Công</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/6/1956</td><td class="text-align-left">381511024276</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="hq4xkt">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-58642</td><td class="text-align-left">Nguyễn Thị Ánh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/4/1991</td><td class="text-align-left">184604515416</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="e9gzed">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-15003</td><td class="text-align-left">Mai Thị Bình</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/4/1971</td><td class="text-align-left">773588949726</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="fskw29">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-26562</td><td class="text-align-left">Trần Mỹ Dương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/5/1991</td><td class="text-align-left">749604544459</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="zva509">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-68751</td><td class="text-align-left">Nguyễn Văn Bảo</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/5/1952</td><td class="text-align-left">163929292626</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="s0ezmg">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-52994</td><td class="text-align-left">Trịnh Thị Huyền</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/11/1954</td><td class="text-align-left">178490360695</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="tgs4b">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-57955</td><td class="text-align-left">Vũ Thị Trà</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/6/1993</td><td class="text-align-left">056459237614</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="1n386g">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-53669</td><td class="text-align-left">Trần Diễm Ánh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/9/1999</td><td class="text-align-left">138581183222</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vwnlsq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-39790</td><td class="text-align-left">Trương Trọng Thạch</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/4/1952</td><td class="text-align-left">214603663269</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="z5bau">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-65395</td><td class="text-align-left">Nguyễn Văn Bảo</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/7/1977</td><td class="text-align-left">306357092645</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="572t8d">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-45352</td><td class="text-align-left">Nguyễn Ngọc Nghi</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/8/1969</td><td class="text-align-left">228250502088</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="wy7yy8">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-69439</td><td class="text-align-left">Vũ Thị Lệ</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/11/1995</td><td class="text-align-left">383715642026</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="kb5yv">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-68219</td><td class="text-align-left">Nguyễn Văn Tài</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/10/1989</td><td class="text-align-left">311841492689</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3koq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-03147</td><td class="text-align-left">Nguyễn Văn Nghĩa</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/7/1992</td><td class="text-align-left">666291267762</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4rm9zf">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-84527</td><td class="text-align-left">Trần Thị Phương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/11/1980</td><td class="text-align-left">625540132220</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="av0wk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-07533</td><td class="text-align-left">Trần Thị Tuyết</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/1/1958</td><td class="text-align-left">866629629587</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="w534e">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-18724</td><td class="text-align-left">Nguyễn Thị Bình</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/3/1961</td><td class="text-align-left">068156659498</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="163f1o">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11506</td><td class="text-align-left">Nguyễn Trí Bình</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/11/1999</td><td class="text-align-left">463641011029</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="jhpdv">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-22558</td><td class="text-align-left">Bùi Văn Công</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/5/1980</td><td class="text-align-left">872365556325</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4gvzmx">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-07965</td><td class="text-align-left">Trần Thị Duyên</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/11/1985</td><td class="text-align-left">421839365769</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="a8coo">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-07377</td><td class="text-align-left">Bùi Thị Ngân</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/1/1968</td><td class="text-align-left">590763254869</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="i0gueo">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-65592</td><td class="text-align-left">Trần Thị Hạnh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/8/1972</td><td class="text-align-left">161962873607</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="qrf36o">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-91760</td><td class="text-align-left">Vũ Văn Bình</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">4/4/1956</td><td class="text-align-left">536121512395</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="itqwxn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-73302</td><td class="text-align-left">Nông Văn Lương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/10/2001</td><td class="text-align-left">733318052898</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="0wbg75">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43604</td><td class="text-align-left">Nguyễn Trọng Tiến</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/9/1963</td><td class="text-align-left">707451779254</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3n3b3">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-36262</td><td class="text-align-left">Đinh Ánh Hường</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/8/1969</td><td class="text-align-left">934997812497</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="1ebhqk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-60153</td><td class="text-align-left">Nguyễn Thị Dung</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/3/1955</td><td class="text-align-left">834988426629</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="e5qfow">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-81718</td><td class="text-align-left">Trịnh Văn Phi</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/12/1961</td><td class="text-align-left">972579842695</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="aza2h">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-48853</td><td class="text-align-left">Mai Văn Bằng</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/10/1989</td><td class="text-align-left">790844980623</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2m8qsc">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-31303</td><td class="text-align-left">Nguyễn Văn Định</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/8/1989</td><td class="text-align-left">924114259050</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="by82x">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-91623</td><td class="text-align-left">Nguyễn Việt Công</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/9/1986</td><td class="text-align-left">192227225267</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="uz1mn9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-47164</td><td class="text-align-left">Nguyễn Văn Danh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/3/1968</td><td class="text-align-left">420605520340</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="cn77sb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-76194</td><td class="text-align-left">Nguyễn Tiến Nhật</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/6/2000</td><td class="text-align-left">928176183547</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="gkg3df">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11235</td><td class="text-align-left">Trần Trọng Phước</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/4/1977</td><td class="text-align-left">284328322223</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="6fwr6p">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-33789</td><td class="text-align-left">Trịnh Trọng Nhật</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/1/1983</td><td class="text-align-left">092915780368</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="856eb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-04411</td><td class="text-align-left">Trương Văn Thạch</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/9/1981</td><td class="text-align-left">630931973482</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="0cew9j">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-73628</td><td class="text-align-left">Nguyễn Thị Nhi</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/3/2000</td><td class="text-align-left">784061360103</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="fm61l">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-49887</td><td class="text-align-left">Nguyễn Thị Quỳnh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/4/1985</td><td class="text-align-left">702473112424</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="uyqelj">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-59567</td><td class="text-align-left">Nguyễn Thanh Khánh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/6/1991</td><td class="text-align-left">185486511720</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="mgoc7r">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-99536</td><td class="text-align-left">Nông Thị Hà</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/8/1970</td><td class="text-align-left">997395124357</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="g5srv">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-70173</td><td class="text-align-left">Nguyễn Khánh Chung</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/10/1965</td><td class="text-align-left">622803388946</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="8f603u">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-41329</td><td class="text-align-left">Nguyễn Hưng Tuệ</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">6/5/1968</td><td class="text-align-left">898744154893</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="oj54jl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-00703</td><td class="text-align-left">Nông Thị Chi</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/7/1961</td><td class="text-align-left">945462407788</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="h8wlvs">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-83770</td><td class="text-align-left">Vũ Văn Đức</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/8/1954</td><td class="text-align-left">207628062814</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4jvvpk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-34909</td><td class="text-align-left">Vũ Văn Nhật</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/5/1995</td><td class="text-align-left">000055805981</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="7drlai">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-59504</td><td class="text-align-left">Nông Đức Định</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/1/1992</td><td class="text-align-left">279224516922</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="fjkall">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-31229</td><td class="text-align-left">Trần Văn Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/4/1975</td><td class="text-align-left">039579969868</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ycrrvi">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-01871</td><td class="text-align-left">Hồ Ngọc Quân</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/6/1986</td><td class="text-align-left">999056638499</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="qat5a">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-73883</td><td class="text-align-left">Trần Hưng Trọng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/5/1953</td><td class="text-align-left">362575858614</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="puxq1r">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-84895</td><td class="text-align-left">Trần Trọng Chính</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/10/1995</td><td class="text-align-left">767217641217</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="l2ncd">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-37255</td><td class="text-align-left">Hoàng Văn Thanh</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/3/1972</td><td class="text-align-left">527609592859</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="dexs26r">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43408</td><td class="text-align-left">Nguyễn Văn Nghị</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/2/1999</td><td class="text-align-left">004777444921</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="nitgnh">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-49588</td><td class="text-align-left">Vũ Văn Tuân</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/6/1953</td><td class="text-align-left">906187926175</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="wbi86">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-63081</td><td class="text-align-left">Nguyễn Văn Phương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/8/1952</td><td class="text-align-left">573413723708</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="9lh1sn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-68160</td><td class="text-align-left">Trần Văn Dương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/11/1991</td><td class="text-align-left">967085026618</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="8umhpt">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-40138</td><td class="text-align-left">Trương Thị Vân</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/6/1959</td><td class="text-align-left">837047339105</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="pscqmr">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-55673</td><td class="text-align-left">Trần Tú Bình</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/5/1988</td><td class="text-align-left">615134941226</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="97gfwi">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-59795</td><td class="text-align-left">Trần Hưng Cảnh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/5/1952</td><td class="text-align-left">753917079071</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="20jj1">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-76808</td><td class="text-align-left">Nguyễn Thị Thanh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/4/1975</td><td class="text-align-left">888706143999</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vq5q7">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-47468</td><td class="text-align-left">Nguyễn Thị Bình</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/9/1993</td><td class="text-align-left">825594233824</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="dpaunz">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-48473</td><td class="text-align-left">Võ Việt Định</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/6/1977</td><td class="text-align-left">088137631074</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="mfyfm">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-25737</td><td class="text-align-left">Bùi Thị Quế</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/2/1976</td><td class="text-align-left">095679834577</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="6d5le">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-22415</td><td class="text-align-left">Nguyễn Văn Tùng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/12/1996</td><td class="text-align-left">986387471025</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="k4l64l">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-55091</td><td class="text-align-left">Trần Trọng Triệu</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/5/1955</td><td class="text-align-left">137409818877</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="wmrof">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-67279</td><td class="text-align-left">Mai Văn Thọ</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/6/1991</td><td class="text-align-left">514775797495</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="q49hsr">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-85549</td><td class="text-align-left">Nguyễn Hưng Quốc</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/9/1982</td><td class="text-align-left">515030788643</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="oug2jk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-72512</td><td class="text-align-left">Nguyễn Thị Ngà</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/12/1973</td><td class="text-align-left">437573384723</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4v6skb9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-17493</td><td class="text-align-left">Trương Văn Phúc</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/1/1999</td><td class="text-align-left">271356428427</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4eaxlq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-17191</td><td class="text-align-left">Trịnh Diễm Băng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/5/1990</td><td class="text-align-left">455430240748</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="a8knjk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-59780</td><td class="text-align-left">Trần Thị Hường</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/12/1981</td><td class="text-align-left">021252490631</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="txx07w">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-67459</td><td class="text-align-left">Nguyễn Văn Lĩnh</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/4/1998</td><td class="text-align-left">903508593244</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="fq9lw8">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11934</td><td class="text-align-left">Mai Thị Trà</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/6/1992</td><td class="text-align-left">495965300422</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="6kjalp">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-27169</td><td class="text-align-left">Trần Khánh Thảo</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/8/1973</td><td class="text-align-left">689629847135</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="gzxbr9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-47639</td><td class="text-align-left">Nguyễn Văn Công</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/7/1974</td><td class="text-align-left">052766204027</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="0vwbhl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-88531</td><td class="text-align-left">Vũ Linh Trâm</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/4/2001</td><td class="text-align-left">261235713338</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="oqvboa">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-51444</td><td class="text-align-left">Nguyễn Thị Nhài</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/10/1996</td><td class="text-align-left">475799526244</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ih0axu">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-25876</td><td class="text-align-left">Nguyễn Văn Cảnh</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/8/1987</td><td class="text-align-left">395596136130</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="35seu">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-25914</td><td class="text-align-left">Đinh Thị Khánh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/10/1969</td><td class="text-align-left">733498479377</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="d1fan">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11078</td><td class="text-align-left">Nguyễn Văn Tuân</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/1/1982</td><td class="text-align-left">107838755957</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="yq8wnq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-47349</td><td class="text-align-left">Nguyễn Văn Chính</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/9/1966</td><td class="text-align-left">091158154490</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ht95f">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-25039</td><td class="text-align-left">Mai Văn Đức</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/4/1960</td><td class="text-align-left">315186868186</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="e2kz3">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-21164</td><td class="text-align-left">Nguyễn Văn Linh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/10/1982</td><td class="text-align-left">259252975021</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="iedmfs">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-70750</td><td class="text-align-left">Trần Thị Hương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/3/1972</td><td class="text-align-left">633091771679</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xbaz2b">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-46124</td><td class="text-align-left">Nguyễn Văn Phước</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/9/1978</td><td class="text-align-left">959834897993</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ff9dus">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-35900</td><td class="text-align-left">Nguyễn Trọng Trí</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/10/1976</td><td class="text-align-left">327500182456</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4xcn4o">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-79335</td><td class="text-align-left">Nông Thị Nga</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/12/1974</td><td class="text-align-left">670725592552</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="p7jlr5">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-95264</td><td class="text-align-left">Trịnh Khánh Hương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/5/1973</td><td class="text-align-left">273257261022</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="9eudbt">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-94561</td><td class="text-align-left">Hoàng Ngọc Phong</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">4/3/1971</td><td class="text-align-left">144650623214</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4fw1z">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-78797</td><td class="text-align-left">Trần Thị Bích</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/4/1969</td><td class="text-align-left">019501381958</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="7oheev">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-02949</td><td class="text-align-left">Trần Thị Bình</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/6/1967</td><td class="text-align-left">907941658056</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3yg7w">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-05831</td><td class="text-align-left">Trần Thị Hồng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">4/9/1966</td><td class="text-align-left">298206357327</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="sjd2q">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43148</td><td class="text-align-left">Hoàng Thị Diệp</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/2/1965</td><td class="text-align-left">077696004249</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="f133pwq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-05680</td><td class="text-align-left">Nguyễn Văn Đông</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/12/1963</td><td class="text-align-left">358921884013</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="m1sijn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-29468</td><td class="text-align-left">Vũ Văn Tiến</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/9/1963</td><td class="text-align-left">379081670787</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="lesp2">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-69545</td><td class="text-align-left">Nguyễn Vân Quỳnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/4/1963</td><td class="text-align-left">988873675864</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="bgjvqa">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-27399</td><td class="text-align-left">Nguyễn Thành Chung</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/5/1962</td><td class="text-align-left">520763443470</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3hz8d">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-78372</td><td class="text-align-left">Nguyễn Thị Nga</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/2/1961</td><td class="text-align-left">808482898378</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2qermk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-20299</td><td class="text-align-left">Nguyễn Thị Quyên</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">6/7/1959</td><td class="text-align-left">983321420439</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2u1uoj">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-56460</td><td class="text-align-left">Trịnh Minh Chiến</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/4/1959</td><td class="text-align-left">281104024864</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="36vpga">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-55933</td><td class="text-align-left">Nguyễn Quốc Tuân</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/1/1959</td><td class="text-align-left">733260966136</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3agq4">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-38832</td><td class="text-align-left">Nguyễn Thị Như</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/1/1958</td><td class="text-align-left">914768095753</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="yeeb78">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-94276</td><td class="text-align-left">Nguyễn Trí Phi</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">5/9/1954</td><td class="text-align-left">496549234749</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="v9eb1r">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-72538</td><td class="text-align-left">Hồ Văn Phương</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/8/1954</td><td class="text-align-left">454383331345</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2iktos">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-76859</td><td class="text-align-left">Nguyễn Thị Khuê</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/8/1954</td><td class="text-align-left">465323896049</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="bfhrpk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-21867</td><td class="text-align-left">Võ Đức Khương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/7/1954</td><td class="text-align-left">541756045626</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vw4nw">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-69008</td><td class="text-align-left">Nguyễn Văn Anh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/7/1954</td><td class="text-align-left">215580577921</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="n5pbll">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-02789</td><td class="text-align-left">Nguyễn Tiến Cương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/4/1954</td><td class="text-align-left">792366772473</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2jzy5p">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-67948</td><td class="text-align-left">Nguyễn Trọng Đức</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/3/1954</td><td class="text-align-left">095949316002</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="5a4yb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-16130</td><td class="text-align-left">Võ Văn Thông</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/12/1953</td><td class="text-align-left">394568246414</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xqioefg">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-02307</td><td class="text-align-left">Đinh Anh Cảnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">6/9/1953</td><td class="text-align-left">330039009789</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="6cgz9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-82002</td><td class="text-align-left">Vũ Thị Ngân</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">5/9/1953</td><td class="text-align-left">634603329048</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="jz49n">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-51905</td><td class="text-align-left">Nguyễn Thị Hồng</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/7/1953</td><td class="text-align-left">381716524614</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="lousve">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-40604</td><td class="text-align-left">Nguyễn Văn Phước</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/7/1953</td><td class="text-align-left">767089062570</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="jrxljn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-17047</td><td class="text-align-left">Hoàng Thành Nhân</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/5/1953</td><td class="text-align-left">705381207401</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="nd9ez">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-88026</td><td class="text-align-left">Trần Thanh Nga</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/3/1953</td><td class="text-align-left">126005350164</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="gxzc6">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-99634</td><td class="text-align-left">Đinh Đức Nhanh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/3/1953</td><td class="text-align-left">837614850357</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="82elnr">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-66890</td><td class="text-align-left">Nguyễn Minh Phan</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">3/3/1953</td><td class="text-align-left">274350718884</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="yaz0i9">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-53289</td><td class="text-align-left">Trần Thị Hương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/3/1953</td><td class="text-align-left">856105093717</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="l0f2g">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-05107</td><td class="text-align-left">Nguyễn Văn Thọ</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/11/1952</td><td class="text-align-left">533517433492</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3ei0v7">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-05048</td><td class="text-align-left">Đinh Thị Dương</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/7/1952</td><td class="text-align-left">368912066581</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vlqmb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-90893</td><td class="text-align-left">Trần Thành Nghĩa</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/7/1952</td><td class="text-align-left">433479391066</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="90h4nb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-57315</td><td class="text-align-left">Trần Văn Bằng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/7/1952</td><td class="text-align-left">017689369477</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="11anrb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-31045</td><td class="text-align-left">Đinh Thị Mai</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">2/6/1952</td><td class="text-align-left">082308769499</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ul29zp">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-37193</td><td class="text-align-left">Võ Tiến Thành</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/5/1952</td><td class="text-align-left">412199088212</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="bfj268">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-30503</td><td class="text-align-left">Trần Văn Quang</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">6/5/1952</td><td class="text-align-left">193008639159</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="jcvplxb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-78105</td><td class="text-align-left">Trương Thị Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/4/1952</td><td class="text-align-left">530696314453</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="fjjt7m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-42369</td><td class="text-align-left">Trịnh Minh Nguyên</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/4/1952</td><td class="text-align-left">143898615306</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="9100fr">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-30689</td><td class="text-align-left">Nguyễn Văn Bốn</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">0/4/1952</td><td class="text-align-left">588643446291</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="030fb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-69886</td><td class="text-align-left">Vũ Thị Hoài</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/4/1952</td><td class="text-align-left">986944547126</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="h8qmy">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-80838</td><td class="text-align-left">Nguyễn Hưng Phú</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/4/1952</td><td class="text-align-left">370676480112</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="rygcth">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-51818</td><td class="text-align-left">Nông Thị Băng</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/4/1952</td><td class="text-align-left">272961142640</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="hk6or">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-59255</td><td class="text-align-left">Nguyễn Mỹ Thảo</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">1/3/1952</td><td class="text-align-left">970026981084</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="mb8w63">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-63480</td><td class="text-align-left">Nông Văn Nhân</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/3/1952</td><td class="text-align-left">632109094480</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="t2qkvn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-68925</td><td class="text-align-left">Nguyễn Văn Anh</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/3/1952</td><td class="text-align-left">641221574575</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="flxzpn">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-65013</td><td class="text-align-left">Mai Thị Liễu</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">4/3/1952</td><td class="text-align-left">497559878382</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="u2h3xo">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-97275</td><td class="text-align-left">Hoàng Khánh Dung</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/3/1952</td><td class="text-align-left">948240474332</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="7neiza">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-63119</td><td class="text-align-left">Nguyễn Vân Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/3/1952</td><td class="text-align-left">764113137288</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="lkgjk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-47668</td><td class="text-align-left">Nguyễn Mỹ Trâm</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/3/1952</td><td class="text-align-left">755962485583</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ze267h">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-33967</td><td class="text-align-left">Trương Thị Nga</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/2/1952</td><td class="text-align-left">480379428526</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4bkais">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-80702</td><td class="text-align-left">Bùi Hưng Tuấn</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/2/1952</td><td class="text-align-left">335982320766</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="c38bph">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-90274</td><td class="text-align-left">Nguyễn Mỹ Châu</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/2/1952</td><td class="text-align-left">787932169442</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="k29by">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-83202</td><td class="text-align-left">Trần Quốc Thái</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/2/1952</td><td class="text-align-left">182468391109</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="nn4v5e">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-88002</td><td class="text-align-left">Nguyễn Thị Thu</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/2/1952</td><td class="text-align-left">344652555342</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="5367vk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43144</td><td class="text-align-left">Đinh Thành Lương</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/2/1952</td><td class="text-align-left">332292115722</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="djafrs">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-79092</td><td class="text-align-left">Nguyễn Minh Thọ</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">0/2/1952</td><td class="text-align-left">124731925436</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="tn3z3">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-23372</td><td class="text-align-left">Mai Tiến Duy</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/2/1952</td><td class="text-align-left">844576021742</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="hayedk">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-42772</td><td class="text-align-left">Nguyễn Thị Quỳnh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/1/1952</td><td class="text-align-left">480624902383</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="u928">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-75992</td><td class="text-align-left">Trần Thanh Hà</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/1/1952</td><td class="text-align-left">475548839050</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="g8eg88">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-57700</td><td class="text-align-left">Hoàng Đức Trung</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/1/1952</td><td class="text-align-left">226944545594</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="kf067e">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-89138</td><td class="text-align-left">Hồ Văn Danh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/1/1952</td><td class="text-align-left">483922325693</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="swq7j">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-21258</td><td class="text-align-left">Trần Hưng Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/1/1952</td><td class="text-align-left">139650504627</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="j603dt">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-48677</td><td class="text-align-left">Nguyễn Văn Thạch</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/1/1952</td><td class="text-align-left">462779091938</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="wgaz5i">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43394</td><td class="text-align-left">Nông Thị Hường</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">3/1/1952</td><td class="text-align-left">298675406647</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="uavd6f">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-42473</td><td class="text-align-left">Trần Thị Nhài</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/1/1952</td><td class="text-align-left">752735908226</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xlhk1m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-51237</td><td class="text-align-left">Trần Tiến Thịnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/1/1952</td><td class="text-align-left">769993586710</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="qwix2">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-53045</td><td class="text-align-left">Nguyễn Quang Thịnh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/1/1952</td><td class="text-align-left">503223593508</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xq5cr">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-62834</td><td class="text-align-left">Mai Văn Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">2/1/1952</td><td class="text-align-left">270011099571</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="1bmeue">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-47017</td><td class="text-align-left">Vũ Hưng Cảnh</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/1/1952</td><td class="text-align-left">228142834703</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xwpx7f">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-15750</td><td class="text-align-left">Nguyễn Ngọc Thoa</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">1/1/1952</td><td class="text-align-left">651171960685</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="kgnmb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-37003</td><td class="text-align-left">Trương Thị Tuyết</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/1/1952</td><td class="text-align-left">122959861802</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="24u4yl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-96867</td><td class="text-align-left">Trần Khánh Như</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">1/1/1952</td><td class="text-align-left">167317432416</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ly3z76">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-27386</td><td class="text-align-left">Nguyễn Văn Dương</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">0/1/1952</td><td class="text-align-left">166753925992</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="zjb9xq">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-39751</td><td class="text-align-left">Hồ Vân Lan</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">6/1/1952</td><td class="text-align-left">484615557987</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="v8t90b">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-29950</td><td class="text-align-left">Trần Thị Liên</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">5/1/1952</td><td class="text-align-left">707024229491</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="06olwl">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-04524</td><td class="text-align-left">Nguyễn Việt Anh</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/1/1952</td><td class="text-align-left">090752795559</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="4cx84h">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-06659</td><td class="text-align-left">Bùi Văn Nghĩa</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">4/1/1952</td><td class="text-align-left">132557388203</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vfdn0s">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-59689</td><td class="text-align-left">Nông Trọng Giang</td><td class="text-align-left" style="min-width: 200px;">Nam</td><td class="text-align-center">4/1/1952</td><td class="text-align-left">795707098972</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="qcdm9j">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-19065</td><td class="text-align-left">Nguyễn Văn Trọng</td><td class="text-align-left" style="min-width: 200px;">Không xác định</td><td class="text-align-center">3/1/1952</td><td class="text-align-left">705807701146</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ykay7m">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-07237</td><td class="text-align-left">Hoàng Quốc Nguyên</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/1/1952</td><td class="text-align-left">981398958022</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="jmq5e7">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-52421</td><td class="text-align-left">Hồ Trí Bốn</td><td class="text-align-left" style="min-width: 200px;">Nữ</td><td class="text-align-center">2/1/1952</td><td class="text-align-left">969984036691</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="l9toxw">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-12653</td><td class="text-align-left">Trần Linh Hoài</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">357205632874</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="i3k9ra">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-00707</td><td class="text-align-left">Nguyễn Thị Diệp</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">068574523237</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="2xvg5q">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43038</td><td class="text-align-left">Hồ Tiến Phúc</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">949873949096</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="3betna">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-15333</td><td class="text-align-left">Võ Ánh Thu</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">358299717548</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="k5jaz">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-48262</td><td class="text-align-left">Trương Đức Tuyền</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">637319381091</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="a9nd5r">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-78682</td><td class="text-align-left">Trần Thị Mỹ</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">088879424463</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="16xpg">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-52949</td><td class="text-align-left">Nguyễn Trọng Chương</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">145580719621</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="j3wz0n">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-81476</td><td class="text-align-left">Trần Mỹ Nguyệt</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">292768647693</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="142hhi">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-73974</td><td class="text-align-left">Nguyễn Anh Định</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">289598761487</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="ul3qi">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-85892</td><td class="text-align-left">Nguyễn Văn Dương</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">982971445246</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="omcila">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-90179</td><td class="text-align-left">Nguyễn Thị Nhài</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">713046594639</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="6566nh">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-71703</td><td class="text-align-left">Trương Ánh Anh</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">761075569061</td><td class="text-align-left">Trưởng nhóm</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="0kxah">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-07884</td><td class="text-align-left">Nguyễn Vân Trà</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">137722752871</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="89ejvj">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-41100</td><td class="text-align-left">Nguyễn Linh Hoài</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">335687264730</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="oahmmj">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-43414</td><td class="text-align-left">Trần Ánh Thúy</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">337206813514</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="tqhc5k">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-05150</td><td class="text-align-left">Trần Ngọc Hiền</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">905785246523</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="yt2gv8">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-11895</td><td class="text-align-left">Nguyễn Trọng Khánh</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">500778459681</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="gb2srg">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-17380</td><td class="text-align-left">Võ Văn Duy</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">868663266274</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Kế Toán</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="whh03f">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-27141</td><td class="text-align-left">Nguyễn Thị Phương</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">985800216083</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="32ao0k">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-84007</td><td class="text-align-left">Trần Thị Ngọc</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">514312278643</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="n8wk6">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-66393</td><td class="text-align-left">Nguyễn Văn Thắng</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">994074538553</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xax9h">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-01185</td><td class="text-align-left">Bùi Ngọc Phi</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">320255044079</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="q3je8">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-75504</td><td class="text-align-left">Nguyễn Trọng Tuệ</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">567983739017</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vhwtvy">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-09038</td><td class="text-align-left">Vũ Văn Thái</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">829389838908</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="d5jijf">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-20793</td><td class="text-align-left">Nguyễn Ánh Liên</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">368295002332</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="giezwf">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-25602</td><td class="text-align-left">Nguyễn Đức Thành</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">094356645707</td><td class="text-align-left">Nhân viên</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="vv59gm">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-10736</td><td class="text-align-left">Trần Minh Cường</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">175108788601</td><td class="text-align-left">Quản trị hệ thống</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="xalk5f">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-52019</td><td class="text-align-left">Vũ Văn Chung</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">761514442671</td><td class="text-align-left">Trưởng phòng</td><td class="text-align-left">Phòng Công Nghệ Thông Tin</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="5gvcbg">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-34550</td><td class="text-align-left">Trịnh Thanh Hương</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">785158005650</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Hành Chính</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="rn2eeb">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr><tr><td class="text-align-center"><label class="input__checkbox-wrapper">
                        <input type="checkbox" class="input__checkbox">
                        <span class="ms__checkbox select__all-checkbox">
                            <span class="ms__border-checkbox">
                                <div class="ms__checbox-icon"></div>
                            </span>
                        </span>
                    </label></td><td class="text-align-left">NV-88208</td><td class="text-align-left">Mai Văn Nhân</td><td class="text-align-left" style="min-width: 200px;"></td><td class="text-align-center">4/1/1970</td><td class="text-align-left">224646681939</td><td class="text-align-left">Giám đốc</td><td class="text-align-left">Phòng Nhân Sự</td><td class="text-align-left"></td><td class="text-align-left"></td><td class="text-align-left"></td><td class="dropdown-fun text-align-center"><button class="link-btn btn-link-primary" fdprocessedid="5f9bsx">Sửa</button><div class="input__icon-box ml-8"><div class="icon-dropdown"></div></div></td></tr></tbody>
                                        </table></div>
                           
                                
                            </div>
                            <!-- end table -->

                            <!-- begin paging -->
                            <div class="content__main-paging">
                                <p class="content__main-paging-left">
                                    Tổng số: <strong>1035</strong> bản ghi
                                </p>
                                <div class="content__main-paging-right">
                                    <div class="paging__record">
                                        <div class="input__wrapper dropdown">
                                            <button class="input__icon dropdown-icon" fdprocessedid="jeq9qa">
                                                <div class="input__icon-dropdown"></div>
                                            </button>
                                            <input readonly="true" type="text" style="border: none" class="input__type dropdown-input paging-input" value="20 bản ghi trên 1 trang" fdprocessedid="epqss">

                                            <div class="option__wrapper">
                                                <ul class="option__list scrollbar_customize">
                                                    <li class="option__item">
                                                        <a href="#" class="option__link">10 bản ghi trên 1
                                                            trang</a>
                                                    </li>

                                                    <li class="option__item active">
                                                        <a href="#" class="option__link ">20 bản ghi trên 1
                                                            trang
                                                        </a>
                                                    </li>
                                                    <li class="option__item">
                                                        <a href="#" class="option__link">30 bản ghi trên 1
                                                            trang</a>
                                                    </li>
                                                    <li class="option__item">
                                                        <a href="#" class="option__link">50 bản ghi trên 1
                                                            trang</a>
                                                    </li>
                                                    <li class="option__item">
                                                        <a href="#" class="option__link">100 bản ghi trên 1
                                                            trang</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="navbar">
                                        <a href="#" class="navbar__item">
                                            Trước
                                        </a>
                                        <a href="#" class="navbar__item active">1</a>
                                        <a href="#" class="navbar__item">2</a>
                                        <a href="#" class="navbar__item">3</a>
                                        <a href="#" class="navbar__item">...</a>
                                        <a href="#" class="navbar__item">52</a>
                                        <a href="#" class="navbar__item">
                                            sau
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- end paging -->
                        </div>
                        
                    </div>
                </div>
</template>
<script>
export default {
    name:"TheContent",
    
    
}
</script>
<style scoped>
@import url(../../css/layout/content.css);
</style>