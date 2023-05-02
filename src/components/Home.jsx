import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token === null) {
			navigate("/login");
		}
	},)

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
												<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
													
													<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Image</td>
													<td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">purvi</td>
													<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">email</td>
													<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">843034009</td>
													<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
														<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
													</td>
												</tr>
												
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home