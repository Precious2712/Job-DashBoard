
import axios from "axios"
import { useEffect, useState } from "react";

export const useGetAllJob = () => {
    const [isError, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const [jobData, setJobData] = useState();

    const getJobLink = async () => {
        try {
            const jobResponse = await axios.get('https://67bc3b4aed4861e07b39b695.mockapi.io/api/v2/Job-titles')
            const res = jobResponse.data
            if (res) {
                setJobData(res);
                setIsSuccess("🎉 Congratulations! Your data was fetched successfully!");
                setIsError(null);
            } else {
                setIsError("❌ Sorry, no jobs found!");
                setIsSuccess(null);
            }
        } catch (error) {
            console.log(error.message);
            setIsError(`❌ Network error: ${error.message}`);
            setIsSuccess(null);
        }

        console.log(isError);
    }

    useEffect(() => {
        getJobLink()
    }, []);

    return {
        jobData,
        isError,
        isSuccess
    }
}