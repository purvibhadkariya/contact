import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Model from './Model/Model';

const Home = () => {

	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [data,setData] = useState(JSON.parse(localStorage.getItem("data")));
	const [show,setShow]= useState(false);
	const [contact,setContact] = useState({});

	useEffect(() => {
		if (token === null) {
			navigate("/login");
		}
	},)

	const showModel = (data)=>{
		setShow(true);
		setContact(data);
	}

	const Delete = (contact) =>{
		setData(data.filter((value,index)=>{
			return value.id !== contact.id
		}))
	}

	return (
		<div className="bg-gray-100 flex items-center justify-center h-[600px]">
			<div className="container shadow-2xl rounded-lg border-2 px-2 bg-white h-[500px] w-10/12">
				<h2 className="my-4 font-bold">Contacts </h2>
				<div className="w-full">
					<div class="">
						<div class="flex flex-col">
							<div class="overflow-x-auto shadow-md sm:rounded-lg">
								<div class="inline-block min-w-full align-middle">
									<div class="overflow-hidden ">
										<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
											<thead class="bg-gray-100 dark:bg-gray-700">
												<tr>
													<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
														Profile
													</th>
													<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
														Name
													</th>
													<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
														Email
													</th>
													<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
														Mobile
													</th>
													<th scope="col" class="p-4">
														<span class="sr-only">Edit</span>
													</th>
												</tr>
											</thead>
											<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

												{
													data !== null ?
														data.map((value, index) => {
															return (
																<tr key={index} class="hover:bg-gray-100 dark:hover:bg-gray-700">
																	<td class="py-4 px-6 flex justify-center text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
																		<img class="object-cover  w-8 h-8 rounded-full" src={value.photo} alt="" />
																	</td>


																	<td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{value.name}</td>
																	<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{value.email}</td>
																	<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{value.phone}</td>
																	<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
																		<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline mx-4" onClick={()=>showModel(value)} >View</a>
																		<a href="#" class="text-blue-600 dark:text-green-500 hover:underline">Edit</a>
																		<a href="#" class="text-blue-600 dark:text-red-500 hover:underline mx-4" onClick={()=>Delete(value)} >Delete</a>
																	</td>

																</tr>
															)
														})
														:
														""
												}

											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Model show={show} setshow={setShow}  contact={contact} />
			</div>
		</div>
	)
}

export default Home