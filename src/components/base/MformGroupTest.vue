<MyInputGroup
    labelFor="email"
    labelText="{{ MISAResouce.vi.LabelEmail }}"
    tooltipKind="error"
    tooltipSubtext="{{ MISAResouce.vi.LabelEmail + MISAResouce.vi.ErrorEmail }}"
    inputId="email"
    inputName="Email"
    inputKind="default"
    inputPlaceholder="{{ MISAResouce.vi.LabelEmail.toLowerCase() }}"
    :value="newEmployee.Email"
    @valid="handleValidEmail"
    @error="handleInvalidEmail"
/>
