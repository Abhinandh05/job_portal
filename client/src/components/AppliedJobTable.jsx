import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);
    return (
        <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 text-center">
                
            </h2>
            <Table className="min-w-full table-auto text-gray-700">
                <TableCaption className="text-xl font-semibold text-gray-600">A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 transition-all duration-300">
                        <TableHead className="py-2 px-4 text-left">Date</TableHead>
                        <TableHead className="py-2 px-4 text-left">Job Role</TableHead>
                        <TableHead className="py-2 px-4 text-left">Company</TableHead>
                        <TableHead className="py-2 px-4 text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0
                            ? <span className="block py-2 text-center text-gray-500">You haven't applied to any jobs yet.</span>
                            : allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob._id} className="hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                                    <TableCell className="py-2 px-4">{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                    <TableCell className="py-2 px-4">{appliedJob.job?.title}</TableCell>
                                    <TableCell className="py-2 px-4">{appliedJob.job?.company?.name}</TableCell>
                                    <TableCell className="py-2 px-4 text-right">
                                        <Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'} transition-all duration-300 transform hover:scale-110`}>
                                            {appliedJob.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable
