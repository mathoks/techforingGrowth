import { CustomSpinner } from "@/components/Spinner/CustomSpinner";

export default function Loading() {
    return <div className="min-h-screen flex flex-col gap-2 justify-center items-center">
        <CustomSpinner />
    </div>
}