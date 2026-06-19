import api from "./api";

/* ==========================================
   API ENDPOINT
========================================== */

const TEAM_ENDPOINT =
    "/team";

class TeamService {

    /* ==========================================
       GET ALL TEAM MEMBERS
    ========================================== */

    getAllTeamMembers() {

        return api.get(
            TEAM_ENDPOINT
        );
    }

    /* ==========================================
       GET FEATURED TEAM MEMBERS
    ========================================== */

    getFeaturedTeamMembers() {

        return api.get(
            `${TEAM_ENDPOINT}/featured`
        );
    }

    /* ==========================================
       GET TEAM MEMBER BY ID
    ========================================== */

    getTeamMemberById(
        id
    ) {

        return api.get(
            `${TEAM_ENDPOINT}/${id}`
        );
    }

    /* ==========================================
       CREATE TEAM MEMBER
    ========================================== */

    createTeamMember(
        memberData
    ) {

        return api.post(
            TEAM_ENDPOINT,
            memberData
        );
    }

    /* ==========================================
       UPDATE TEAM MEMBER
    ========================================== */

    updateTeamMember(
        id,
        memberData
    ) {

        return api.put(
            `${TEAM_ENDPOINT}/${id}`,
            memberData
        );
    }

    /* ==========================================
       DELETE TEAM MEMBER
    ========================================== */

    deleteTeamMember(
        id
    ) {

        return api.delete(
            `${TEAM_ENDPOINT}/${id}`
        );
    }
}

const teamService =
    new TeamService();

export default teamService;
