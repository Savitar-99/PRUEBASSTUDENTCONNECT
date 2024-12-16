import React, { useState } from 'react';
import { Plus, Edit2, MessageSquare } from 'lucide-react';
import i18n from 'i18next'; // Importa i18n para las traducciones

interface GuidancePost {
  id: string;
  content: string;
  date: string;
  author: string;
  comments: Array<{
    id: string;
    content: string;
    author: string;
    date: string;
  }>;
}

interface AcademicGuidanceProps {
  isStudent?: boolean;
  posts: GuidancePost[];
  onAddPost?: (content: string) => void;
  onEditPost?: (id: string, content: string) => void;
  onAddComment?: (postId: string, content: string) => void;
}

export const AcademicGuidance: React.FC<AcademicGuidanceProps> = ({
  isStudent = false,
  posts,
  onAddPost,
  onEditPost,
  onAddComment,
}) => {
  const [newPost, setNewPost] = useState('');
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [newComment, setNewComment] = useState<{[key: string]: string}>({});

  const handleAddPost = () => {
    if (newPost.trim() && onAddPost) {
      onAddPost(newPost);
      setNewPost('');
    }
  };

  const handleEditPost = (id: string) => {
    if (editContent.trim() && onEditPost) {
      onEditPost(id, editContent);
      setEditingPost(null);
    }
  };

  const handleAddComment = (postId: string) => {
    if (newComment[postId]?.trim() && onAddComment) {
      onAddComment(postId, newComment[postId]);
      setNewComment(prev => ({ ...prev, [postId]: '' }));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          {i18n.t('title')}
        </h3>
        {isStudent && (
          <button
            onClick={() => setEditingPost('new')}
            className="flex items-center gap-2 px-4 py-2 bg-[#F26F63] text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            <Plus size={20} />
            <span>{i18n.t('newPost')}</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {editingPost === 'new' && (
          <div className="space-y-4">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
              rows={4}
              placeholder={i18n.t('newPostPlaceholder')}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingPost(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                {i18n.t('cancel')}
              </button>
              <button
                onClick={handleAddPost}
                className="px-4 py-2 bg-[#F26F63] text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                {i18n.t('publish')}
              </button>
            </div>
          </div>
        )}

        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 space-y-4">
            {editingPost === post.id ? (
              <div className="space-y-4">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
                  rows={4}
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setEditingPost(null)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {i18n.t('cancel')}
                  </button>
                  <button
                    onClick={() => handleEditPost(post.id)}
                    className="px-4 py-2 bg-[#F26F63] text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    {i18n.t('save')}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600">{post.content}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      {post.author} - {post.date}
                    </p>
                  </div>
                  {isStudent && (
                    <button
                      onClick={() => {
                        setEditingPost(post.id);
                        setEditContent(post.content);
                      }}
                      className="p-2 text-gray-400 hover:text-[#F26F63] transition-colors"
                    >
                      <Edit2 size={20} />
                    </button>
                  )}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="space-y-4">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-600">{comment.content}</p>
                        <p className="text-sm text-gray-400 mt-1">
                          {comment.author} - {comment.date}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      value={newComment[post.id] || ''}
                      onChange={(e) =>
                        setNewComment(prev => ({
                          ...prev,
                          [post.id]: e.target.value
                        }))
                      }
                      placeholder={i18n.t('addComment')}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="p-2 text-white bg-[#F26F63] rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      <MessageSquare size={20} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
