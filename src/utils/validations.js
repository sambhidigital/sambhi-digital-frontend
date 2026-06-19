// src/utils/validations.js

/* ==========================================
   EMAIL
========================================== */

export const validateEmail = (
    email
) => {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
};

/* ==========================================
   PHONE (INDIA)
========================================== */

export const validatePhone = (
    phone
) => {

    const regex =
        /^[6-9]\d{9}$/;

    return regex.test(phone);
};

/* ==========================================
   REQUIRED FIELD
========================================== */

export const validateRequired = (
    value
) => {

    return (
        value !== null &&
        value !== undefined &&
        value.toString().trim() !== ""
    );
};

/* ==========================================
   NAME
========================================== */

export const validateName = (
    name
) => {

    const regex =
        /^[A-Za-z\s]{2,50}$/;

    return regex.test(name);
};

/* ==========================================
   PASSWORD
========================================== */

export const validatePassword = (
    password
) => {

    return (
        password &&
        password.length >= 8
    );
};

/* ==========================================
   STRONG PASSWORD
========================================== */

export const validateStrongPassword =
(password) => {

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex.test(password);
};

/* ==========================================
   CONFIRM PASSWORD
========================================== */

export const validateConfirmPassword =
(
    password,
    confirmPassword
) => {

    return (
        password ===
        confirmPassword
    );
};

/* ==========================================
   URL
========================================== */

export const validateURL = (
    url
) => {

    try {

        new URL(url);

        return true;

    } catch {

        return false;
    }
};

/* ==========================================
   MIN LENGTH
========================================== */

export const validateMinLength =
(
    value,
    length
) => {

    return (
        value &&
        value.length >= length
    );
};

/* ==========================================
   MAX LENGTH
========================================== */

export const validateMaxLength =
(
    value,
    length
) => {

    return (
        value &&
        value.length <= length
    );
};

/* ==========================================
   RESUME FILE
========================================== */

export const validateResumeFile =
(file) => {

    if (!file) {

        return false;
    }

    const allowedTypes = [

        "application/pdf",

        "application/msword",

        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    return allowedTypes.includes(
        file.type
    );
};

/* ==========================================
   CONTACT FORM
========================================== */

export const validateContactForm =
(
    data
) => {

    const errors = {};

    if (
        !validateRequired(
            data.name
        )
    ) {

        errors.name =
            "Name is required";

    } else if (
        !validateName(
            data.name
        )
    ) {

        errors.name =
            "Invalid name";
    }

    if (
        !validateRequired(
            data.email
        )
    ) {

        errors.email =
            "Email is required";

    } else if (
        !validateEmail(
            data.email
        )
    ) {

        errors.email =
            "Invalid email address";
    }

    if (
        data.phone &&
        !validatePhone(
            data.phone
        )
    ) {

        errors.phone =
            "Invalid phone number";
    }

    if (
        !validateRequired(
            data.message
        )
    ) {

        errors.message =
            "Message is required";
    }

    return errors;
};

/* ==========================================
   CAREER FORM
========================================== */

export const validateCareerForm =
(
    data
) => {

    const errors = {};

    if (
        !validateRequired(
            data.name
        )
    ) {

        errors.name =
            "Name is required";
    }

    if (
        !validateEmail(
            data.email
        )
    ) {

        errors.email =
            "Valid email required";
    }

    if (
        !validatePhone(
            data.phone
        )
    ) {

        errors.phone =
            "Valid phone required";
    }

    if (
        !validateRequired(
            data.position
        )
    ) {

        errors.position =
            "Position is required";
    }

    return errors;
};

/* ==========================================
   BLOG FORM
========================================== */

export const validateBlogForm =
(
    data
) => {

    const errors = {};

    if (
        !validateRequired(
            data.title
        )
    ) {

        errors.title =
            "Title is required";
    }

    if (
        !validateRequired(
            data.content
        )
    ) {

        errors.content =
            "Content is required";
    }

    return errors;
};
