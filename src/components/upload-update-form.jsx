/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import { createNewPost, updatePost } from '../api'

const UploadUpdateForm = ({ type, closeForm, post }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: type === 'update' ? post.username : '',
            title: type === 'update' ? post.title : '',
            text: type === 'update' ? post.text : '',
        },
    })

    const onSubmit = (data) => {
        if (type === 'update') {
            updatePost(post.id, data)
            closeForm(true)
        } else {
            createNewPost(data)
        }
    }
    return (
        <form
            className={`${
                type === 'update'
                    ? 'bg-gradient-to-r mx-0 my-0 to-gray-100 from-white z-50 border-none top-0 left-0'
                    : 'w-2/3 mx-10 my-10 border  border-teal-300 '
            } flex  flex-col   rounded-md px-5 py-10`}
            onSubmit={handleSubmit(onSubmit)}
        >
            {type === 'update' && (
                <button
                    onClick={() => closeForm(true)}
                    className="text-3xl text-gray-600 text-end"
                >
                    X
                </button>
            )}
            <label htmlFor="username" className="mt-5">
                Username
            </label>
            <input
                className="p-2 border-yellow-300 border rounded-md focus:outline-amber-300"
                {...register('username', {
                    required: 'This field is required',
                    minLength: {
                        value: 5,
                        message:
                            'This field should be longer than 5 characters',
                    },
                    maxLength: {
                        value: 25,
                        message:
                            'This field should not be longer than 25 characters',
                    },
                })}
            />
            {errors.username && (
                <span className="text-sm text-red-400">
                    {errors.username.message}
                </span>
            )}
            <label htmlFor="title" className="mt-5">
                Title
            </label>
            <input
                className="p-2 border-yellow-300 border rounded-md focus:outline-amber-300"
                {...register('title', {
                    required: 'This field is required',
                    minLength: {
                        value: 5,
                        message:
                            'This field should be longer than 5 characters',
                    },
                    maxLength: {
                        value: 25,
                        message:
                            'This field should not be longer than 25 characters',
                    },
                })}
            />
            {errors.title && (
                <span className="text-sm text-red-400">
                    {errors.title.message}
                </span>
            )}
            <label htmlFor="username" className="mt-5">
                Text
            </label>
            <input
                className="p-2 border-yellow-300 border rounded-md focus:outline-amber-300"
                {...register('text', {
                    required: 'This field is required',
                    minLength: {
                        value: 50,
                        message:
                            'This field should be longer than 50 characters',
                    },
                })}
            />
            {errors.text && (
                <span className="text-sm text-red-400">
                    {errors.text.message}
                </span>
            )}

            <input
                className="mt-5 text-xl fond-bold cursor-pointer text-pink-500"
                type="submit"
            />
        </form>
    )
}

export default UploadUpdateForm
