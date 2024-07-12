import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Typography from '../../ui/typography';
import Button from '@/components/ui/button';
import Images from '@/components/ui/image';

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

const HomePageView: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        total: 0,
        per_page: 0,
        total_pages: 0,
    });

    const getUsers = async () => {
        try {
            const res = await axios.get(`https://reqres.in/api/users?per_page=6&page=${pagination.currentPage}`);
            const { data, total, per_page, page, total_pages } = res.data;

            setUsers(data);
            setPagination({ total, per_page, currentPage: page, total_pages });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, [pagination.currentPage]);

    const handleNext = () => {
        setPagination((prev) => ({
            ...prev,
            currentPage: prev.currentPage + 1,
        }));
    };

    const handlePrevious = () => {
        setPagination((prev) => ({
            ...prev,
            currentPage: prev.currentPage - 1,
        }));
    };

    const handleReadMoreClick = (itemName: string) => {
        Swal.fire({
            title: `Hello, ${itemName}!`,
            icon: 'info',
            confirmButtonText: 'OK',
        });
    };

    return (
        <div className="bg-abstract min-h-screen">
            <div className="py-3.75 px-9% pb-25 home1:p-5">
                <Typography type="h1" className="text-center pb-3.75 text-green2 text-5xl ml-12 md:ml-0 mb-10">List of Users</Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75 ml-10 px-5 md:ml-0 md:px-0">
                    {users.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center shadow-bS2 rounded text-center py-7.5 px-5 hover:shadow-bS3 hover:scale-105">
                            <Images src={item.avatar} alt="Photo of user" className="h-20 w-20 rounded-full" />
                            <Typography type="h3" className="text-inputs py-2.5">
                                {item.first_name} {item.last_name}
                            </Typography>
                            <Typography type="p" className="text-base leading-7">{item.email}</Typography>
                            <Button className="btn mt-2.5 inline-block bg-green2 text-zinc-100 text-base rounded py-2 px-6.25 hover:tracking-1px"
                                onClick={() => handleReadMoreClick(`${item.first_name} ${item.last_name}`)}
                            >
                                Read more
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between w-full mt-5">
                    <Button
                        disabled={pagination.currentPage === 1}
                        onClick={handlePrevious}
                        className="px-4 py-2 ml-12 md:ml-0 bg-green2 text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </Button>
                    <p className="text-green2 font-bold">{pagination.currentPage}</p>
                    <Button
                        disabled={pagination.currentPage === pagination.total_pages}
                        onClick={handleNext}
                        className="px-4 py-2 bg-green2 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomePageView;
