import React from "react";

import { ProgressSpinner } from "primereact/progressspinner";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

// Layout
import Navbar from "../components/layout/Navbar";
import profileService from "../services/profileService";
import { Password } from "primereact/password";
import { FileUpload } from "primereact/fileupload";

import "../styles/Profile.css";

class Profile extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            profile: null,

            loading: true,

            error: "",

            editDialog: false,

            editProfile: {

                firstName: "",

                lastName: "",

                phone: ""
            },

            changePasswordDialog: false,

            passwordData: {

                oldPassword: "",

                newPassword: "",

                confirmPassword: ""
            },

            uploadDialog: false,

            selectedFile: null,

            loginHistory: []
        };
    }

    componentDidMount() {

        this.loadProfile();

        this.loadLoginHistory();
    }

    openEditDialog = () => {

        const {
            profile
        } = this.state;

        this.setState({

            editDialog: true,

            editProfile: {

                firstName:
                    profile.firstName,

                lastName:
                    profile.lastName,

                phone:
                    profile.phone
            }
        });
    };

    saveProfile = async () => {

        try {

            await profileService
                .updateProfile(

                    this.state.editProfile
                );

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "Profile updated successfully",

                life: 3000
            });

            this.setState({

                editDialog: false
            });

            this.loadProfile();

        } catch (error) {

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:
                    "Profile update failed",

                life: 3000
            });
        }
    };

    openChangePasswordDialog = () => {

        this.setState({

            changePasswordDialog: true,

            passwordData: {

                oldPassword: "",

                newPassword: "",

                confirmPassword: ""
            }
        });
    };

    openUploadDialog = () => {

        this.setState({

            uploadDialog: true,

            selectedFile: null
        });
    };

    uploadProfileImage = async () => {

        if (
            !this.state.selectedFile
        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Warning",

                detail:
                    "Please select an image",

                life: 3000
            });

            return;
        }

        try {

            await profileService
                .uploadProfileImage(

                    this.state.selectedFile
                );

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "Profile image uploaded successfully",

                life: 3000
            });

            this.setState({

                uploadDialog: false
            });

            this.loadProfile();

        } catch (error) {

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:
                    "Image upload failed",

                life: 3000
            });
        }
    };

    changePassword = async () => {

        const {
            passwordData
        } = this.state;

        if (

            passwordData.newPassword !==

            passwordData.confirmPassword

        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Warning",

                detail:
                    "Passwords do not match",

                life: 3000
            });

            return;
        }

        try {

            await profileService
                .changePassword({

                    oldPassword:
                        passwordData.oldPassword,

                    newPassword:
                        passwordData.newPassword
                });

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "Password changed successfully",

                life: 3000
            });

            this.setState({

                changePasswordDialog: false
            });

        } catch (error) {

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:

                    error?.response?.data?.message ||

                    "Unable to change password",

                life: 3000
            });
        }
    };

    loadProfile = async () => {

        try {

            const response =
                await profileService
                    .getProfile();

            console.log(
                "PROFILE RESPONSE:",
                response.data
            );

            this.setState({

                profile:
                    response.data.data,

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    error?.response?.data?.message ||
                    "Unable to load profile."
            });
        }
    };

    loadLoginHistory = async () => {

        try {

            const response =

                await profileService
                    .getLoginHistory();

            this.setState({

                loginHistory:
                    response.data.data
            });

        } catch (error) {

            console.error(error);
        }
    };

    render() {

        const {

            profile,

            loading,

            error,

            loginHistory

        } = this.state;

        if (loading) {

            return (

                <div className="profile-loader">

                    <ProgressSpinner />

                </div>
            );
        }

        if (error) {

            return (

                <div className="profile-error">

                    <h2>
                        {error}
                    </h2>

                </div>
            );
        }

        return (

            <>

                <Navbar />

                <div className="profile-page">

                    <Toast
                        ref={this.toast}
                    />

                    <div className="profile-banner">

                        <div className="profile-overlay">

                            <div className="profile-header">

                                <div className="profile-avatar">

                                    {
                                        profile?.profileImage ?

                                            <img
                                                src={
                                                    `http://localhost:8080${profile.profileImage}`
                                                }
                                                alt="Profile"
                                            />

                                            :

                                            <i className="pi pi-user" />
                                    }

                                </div>

                                <div className="profile-info">

                                    <h1>

                                        {profile?.firstName}

                                        {" "}

                                        {profile?.lastName}

                                    </h1>

                                    <span>

                                        {profile?.role}

                                    </span>

                                    <div className="profile-actions">

                                        <button

                                            className="profile-btn"

                                            onClick={
                                                this.openEditDialog
                                            }

                                        >
                                            <i className="pi pi-user-edit" />
                                            Edit Profile
                                        </button>

                                        <button

                                            className="profile-btn"

                                            onClick={
                                                this.openChangePasswordDialog
                                            }

                                        >
                                            <i className="pi pi-lock" />
                                            Change Password
                                        </button>

                                        <button

                                            className="profile-btn"

                                            onClick={
                                                this.openUploadDialog
                                            }

                                        >
                                            <i className="pi pi-camera" />
                                            Upload Image
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="profile-details-grid">

                        <div className="profile-card">

                            <h3>
                                Personal Information
                            </h3>

                            <div className="profile-item">

                                <label>Email</label>

                                <p>
                                    {profile?.email}
                                </p>

                            </div>

                            <div className="profile-item">

                                <label>Phone</label>

                                <p>
                                    {profile?.phone}
                                </p>

                            </div>

                        </div>

                        <div className="profile-card">

                            <h3>
                                Account Details
                            </h3>

                            <div className="profile-item">

                                <label>User ID</label>

                                <p>
                                    {profile?.id}
                                </p>

                            </div>

                            <div className="profile-item">

                                <label>Role</label>

                                <p>
                                    {profile?.role}
                                </p>

                            </div>

                            <div className="profile-item">

                                <label>
                                    Last Login
                                </label>

                                <p>

                                    {
                                        profile?.lastLogin

                                            ? new Date(
                                                profile.lastLogin
                                            ).toLocaleString()

                                            : "Never"
                                    }

                                </p>

                            </div>

                        </div>

                        <div className="profile-card">

                            <h3>
                                Login History
                            </h3>

                            {
                                loginHistory?.length > 0

                                    ?

                                    loginHistory.map(

                                        (
                                            item,
                                            index
                                        ) => (

                                            <div

                                                key={index}

                                                className="login-history-item"

                                            >

                                                <p>

                                                    <strong>
                                                        Login Time:
                                                    </strong>

                                                    {" "}

                                                    {
                                                        new Date(
                                                            item.loginTime
                                                        ).toLocaleString()
                                                    }

                                                </p>

                                                <p>

                                                    <strong>
                                                        Device:
                                                    </strong>

                                                    {" "}

                                                    {
                                                        item.deviceInfo
                                                    }

                                                </p>

                                                <p>

                                                    <strong>
                                                        IP:
                                                    </strong>

                                                    {" "}

                                                    {
                                                        item.ipAddress
                                                    }

                                                </p>

                                            </div>
                                        )
                                    )

                                    :

                                    <p>
                                        No Login History
                                    </p>
                            }

                        </div>

                    </div>

                </div>

                <Dialog

                    header="Edit Profile"

                    visible={
                        this.state.editDialog
                    }

                    style={{
                        width: "500px"
                    }}

                    onHide={() =>
                        this.setState({
                            editDialog: false
                        })
                    }

                >

                    <div className="p-fluid">

                        <div className="p-field">

                            <label>
                                First Name
                            </label>

                            <InputText

                                value={
                                    this.state.editProfile.firstName
                                }

                                onChange={(e) =>

                                    this.setState({

                                        editProfile: {

                                            ...this.state.editProfile,

                                            firstName:
                                                e.target.value
                                        }
                                    })
                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Last Name
                            </label>

                            <InputText

                                value={
                                    this.state.editProfile.lastName
                                }

                                onChange={(e) =>

                                    this.setState({

                                        editProfile: {

                                            ...this.state.editProfile,

                                            lastName:
                                                e.target.value
                                        }
                                    })
                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Phone
                            </label>

                            <InputText

                                value={
                                    this.state.editProfile.phone
                                }

                                onChange={(e) =>

                                    this.setState({

                                        editProfile: {

                                            ...this.state.editProfile,

                                            phone:
                                                e.target.value
                                        }
                                    })
                                }

                            />

                        </div>

                        <Button

                            label="Save Changes"

                            icon="pi pi-check"

                            onClick={
                                this.saveProfile
                            }

                        />

                    </div>

                </Dialog>

                <Dialog

                    header="Change Password"

                    visible={
                        this.state.changePasswordDialog
                    }

                    style={{
                        width: "500px"
                    }}

                    onHide={() =>
                        this.setState({
                            changePasswordDialog: false
                        })
                    }

                >

                    <div className="p-fluid">

                        <div className="p-field">

                            <label>
                                Current Password
                            </label>

                            <Password

                                feedback={false}

                                toggleMask

                                value={
                                    this.state.passwordData.oldPassword
                                }

                                onChange={(e) =>

                                    this.setState({

                                        passwordData: {

                                            ...this.state.passwordData,

                                            oldPassword:
                                                e.target.value
                                        }
                                    })
                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>
                                New Password
                            </label>

                            <Password

                                toggleMask

                                value={
                                    this.state.passwordData.newPassword
                                }

                                onChange={(e) =>

                                    this.setState({

                                        passwordData: {

                                            ...this.state.passwordData,

                                            newPassword:
                                                e.target.value
                                        }
                                    })
                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Confirm Password
                            </label>

                            <Password

                                feedback={false}

                                toggleMask

                                value={
                                    this.state.passwordData.confirmPassword
                                }

                                onChange={(e) =>

                                    this.setState({

                                        passwordData: {

                                            ...this.state.passwordData,

                                            confirmPassword:
                                                e.target.value
                                        }
                                    })
                                }

                            />

                        </div>

                        <Button

                            label="Change Password"

                            icon="pi pi-lock"

                            onClick={
                                this.changePassword
                            }

                        />

                    </div>

                </Dialog>

                <Dialog

                    header="Upload Profile Image"

                    visible={
                        this.state.uploadDialog
                    }

                    style={{
                        width: "550px"
                    }}

                    onHide={() =>
                        this.setState({
                            uploadDialog: false
                        })
                    }

                >

                    <div className="p-fluid">

                        <FileUpload

                            mode="basic"

                            name="file"

                            accept="image/*"

                            chooseLabel="Choose Image"

                            auto={false}

                            customUpload

                            onSelect={(e) =>

                                this.setState({

                                    selectedFile:
                                        e.files[0]
                                })
                            }

                        />

                        <div
                            style={{
                                marginTop: "20px"
                            }}
                        >

                            <Button

                                label="Upload"

                                icon="pi pi-upload"

                                onClick={
                                    this.uploadProfileImage
                                }

                            />

                        </div>

                    </div>

                </Dialog>
            </>
        );
    }

}

export default Profile;
