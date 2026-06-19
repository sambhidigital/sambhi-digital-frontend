// src/utils/helpers.js

/* ==========================================
   FORMAT DATE
========================================== */

export const formatDate = (
    date,
    locale = "en-IN"
) => {

    if (!date) return "";

    return new Date(date)
        .toLocaleDateString(
            locale,
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );
};

/* ==========================================
   FORMAT DATE & TIME
========================================== */

export const formatDateTime = (
    date,
    locale = "en-IN"
) => {

    if (!date) return "";

    return new Date(date)
        .toLocaleString(
            locale,
            {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            }
        );
};

/* ==========================================
   TRUNCATE TEXT
========================================== */

export const truncateText = (
    text,
    maxLength = 100
) => {

    if (!text) return "";

    return text.length > maxLength
        ? `${text.substring(
              0,
              maxLength
          )}...`
        : text;
};

/* ==========================================
   SCROLL TO TOP
========================================== */

export const scrollToTop = () => {

    if (
        typeof window !==
        "undefined"
    ) {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });
    }
};

/* ==========================================
   GENERATE RANDOM ID
========================================== */

export const generateId = () => {

    return Math.random()
        .toString(36)
        .slice(2, 11);
};

/* ==========================================
   COPY TO CLIPBOARD
========================================== */

export const copyToClipboard =
async (text) => {

    if (!text) return false;

    try {

        await navigator.clipboard
            .writeText(text);

        return true;

    } catch (error) {

        console.error(
            "Clipboard Error:",
            error
        );

        return false;
    }
};

/* ==========================================
   DEBOUNCE
========================================== */

export const debounce = (
    func,
    delay = 300
) => {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(
            () => func(...args),
            delay
        );
    };
};

/* ==========================================
   CAPITALIZE FIRST LETTER
========================================== */

export const capitalize = (
    text
) => {

    if (!text) return "";

    return (
        text.charAt(0)
            .toUpperCase() +
        text.slice(1)
    );
};

/* ==========================================
   SLUG GENERATOR
========================================== */

export const generateSlug = (
    text
) => {

    if (!text) return "";

    return text

        .toLowerCase()

        .trim()

        .replace(
            /[^a-z0-9\s-]/g,
            ""
        )

        .replace(
            /\s+/g,
            "-"
        );
};

/* ==========================================
   IS EMPTY
========================================== */

export const isEmpty = (
    value
) => {

    return (
        value === null ||
        value === undefined ||
        value === ""
    );
};
