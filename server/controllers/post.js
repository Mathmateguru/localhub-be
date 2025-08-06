import Post from '../models/postSchema.js';


export const createPost = async (req, res) => {
	const { title, content, community } = req.body;
	const { userId } = req.decoded
	try {
		const newPost = await Post.create({
			title,
			content,
			community,
			user: userId
		});
		res.status(201)
			.send({ message: 'Community posted successfully', data: newPost });
	} catch (error) {
		res.status(500).send({ message: 'Error posting community', error });
	}
}

export const getPost = async (req, res) => {
	const {id} = req.params
	try {
		const posts = await Post.find({community: id});
		res.status(200).send({ message: 'Post retrieved successfully', data: posts });
	} catch (error) {
		res.status(500).send({ message: 'Error retrieving post', error });
	}
}

export const getSinglePost = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);

		res.status(200).send({ message: 'Post retrieved successfully', data: post });
	} catch (error) {
		res.status(500).send({ message: 'Error retrieving post', error });
	}
}

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title, content } = req.body;
	try {
		const updatedPost = await Post.findByIdAndUpdate(id, {
			title,
			content,
		}, { new: true });

		res.status(200).send({ message: 'Post updated successfully', data: updatedPost });
	} catch (error) {
		res.status(500).send({ message: 'Post updating updated', error });
	}
}

export const deletePost = async (req, res) => {
	const { id } = req.params;
	try {
		await Post.findByIdAndDelete(id);
		res.status(200).send({ message: 'Post deleted successfully' });
	} catch (error) {
		res.status(500).send({ message: 'Error deleting post', error });
	}
}
