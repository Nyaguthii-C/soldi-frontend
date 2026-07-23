import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import TextInput from "../../components/forms/TextInput";
import {getProfile, updateProfile,} from "../../services/profileService";


export default function Profile() {

    const [profile, setProfile] = useState(null);

    const [saving, setSaving] = useState(false);

    async function loadProfile() {

        try {

            const response = await getProfile();

            setProfile(response.data);

        }

        catch(error){

            console.error(error);

        }

    }

    useEffect(() => {

        loadProfile();

    }, []);

    function handleChange(e){

        setProfile({

            ...profile,

            [e.target.name]: e.target.value,

        });

    }

    async function handleSubmit(e){

        e.preventDefault();

        setSaving(true);

        try{

            await updateProfile({

                monthly_limit: profile.monthly_limit,

                currency: profile.currency,

            });

            alert("Profile updated successfully.");

        }

        catch(error){

            console.error(error);

            alert("Unable to update profile.");

        }

        finally{

            setSaving(false);

        }

    }

    if(!profile){

        return(

            <MainLayout>

                Loading...

            </MainLayout>

        );

    }

    return(

        <MainLayout>

            <div className="row justify-content-center">

                <div className="col-lg-6">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h3 className="mb-4">

                                My Profile

                            </h3>

                            <form onSubmit={handleSubmit}>

                                <TextInput
                                    label="Username"
                                    name="username"
                                    value={profile.username}
                                    onChange={handleChange}
                                    readOnly
                                />

                                <TextInput
                                    label="Email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                    readOnly
                                />

                                <TextInput
                                    label="Monthly Budget"
                                    name="monthly_limit"
                                    type="number"
                                    value={profile.monthly_limit}
                                    onChange={handleChange}
                                />

                                <div className="mb-4">
                                    <label className="form-label">Currency</label>

                                    <select
                                        className="form-select"
                                        name="currency"
                                        value={profile.currency}
                                        onChange={handleChange}
                                    >
                                        <option value="KES"> KES </option>
                                        <option value="USD"> USD </option>
                                        <option value="EUR"> EUR </option>
                                    </select>

                                </div>

                                <button className="btn btn-primary w-100" disabled={saving}>
                                    {saving ? "Saving..." : "Save Changes"}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}