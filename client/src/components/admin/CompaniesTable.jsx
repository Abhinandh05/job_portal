import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) => {
            if (!searchCompanyByText) {
                return true;
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText]);

    return (
        <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-xl">
            <Table className="min-w-full table-auto">
                <TableCaption className="text-xl font-semibold text-gray-700">Company Listings</TableCaption>
                <TableHeader>
                    <TableRow className=" to-blue-500 text-white">
                        <TableHead className="py-4 px-6">Logo</TableHead>
                        <TableHead className="py-4 px-6">Name</TableHead>
                        <TableHead className="py-4 px-6">Date</TableHead>
                        <TableHead className="py-4 px-6 text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.map((company) => (
                            <TableRow className="transition-transform transform hover:scale-105 hover:bg-gray-100 ease-in-out" key={company._id}>
                                <TableCell className="py-4 px-6">
                                    <Avatar>
                                        <AvatarImage src={company.logo} className="w-12 h-12 rounded-lg shadow-md" />
                                    </Avatar>
                                </TableCell>
                                <TableCell className="py-4 px-6 font-medium">{company.name}</TableCell>
                                <TableCell className="py-4 px-6 text-gray-600">{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="py-4 px-6 text-right">
                                    <Popover>
                                        <PopoverTrigger className="text-gray-500 hover:text-gray-800 transition-all duration-200 ease-in-out">
                                            <MoreHorizontal className="w-5 h-5 cursor-pointer" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-36 p-2 bg-white border shadow-md rounded-md">
                                            <div onClick={() => navigate(`/admin/companies/`)} className="flex items-center gap-3 text-gray-700 hover:text-[#F83002] cursor-pointer p-2 rounded-md transition-all duration-200 ease-in-out">
                                                <Edit2 className="w-4 h-4" />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable;
