import api from "./api";

/* ==========================================
   AUDIT LOG ENDPOINT
========================================== */

const AUDIT_LOG_ENDPOINT =
    "/audit-logs";

/* ==========================================
   GET ALL AUDIT LOGS
========================================== */

const getAllAuditLogs =
    () => {

        return api.get(
            AUDIT_LOG_ENDPOINT
        );
    };

/* ==========================================
   GET AUDIT LOG BY ID
========================================== */

const getAuditLogById =
    (id) => {

        return api.get(
            `${AUDIT_LOG_ENDPOINT}/${id}`
        );
    };

/* ==========================================
   AUDIT LOG SERVICE
========================================== */

const auditLogService = {

    getAllAuditLogs,

    getAuditLogById
};

/* ==========================================
   EXPORTS
========================================== */

export default auditLogService;

export {

    getAllAuditLogs,

    getAuditLogById
};
