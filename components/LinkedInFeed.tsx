"use client";

import { useState } from "react";
import { Linkedin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

type Post = {
  id: string;
  date: string;
  text: string;
  url: string;
};

function PostCard({ post }: { post: Post }) {
  const [expanded, setExpanded] = useState(false);
  const preview = post.text.slice(0, 120);
  const hasMore = post.text.length > 120;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-slate-400 hover:text-cyan-500 transition"
        >
          <ExternalLink size={13} />
        </a>
      </div>
      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
        {expanded || !hasMore ? post.text : `${preview}…`}
      </p>
      {hasMore && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1 mt-2 text-xs text-cyan-600 hover:text-cyan-500 font-medium"
        >
          {expanded ? (
            <><ChevronUp size={13} /> Show less</>
          ) : (
            <><ChevronDown size={13} /> Read more</>
          )}
        </button>
      )}
    </div>
  );
}

export function LinkedInFeed({ posts }: { posts: Post[] }) {
  return (
    <aside className="w-full lg:w-80 xl:w-96 shrink-0">
      <div className="sticky top-6">
        <div className="flex items-center gap-2 mb-4">
          <Linkedin size={18} className="text-[#0A66C2]" />
          <h2 className="text-base font-bold text-slate-900">LinkedIn Activity</h2>
        </div>
        <div className="space-y-3 max-h-[80vh] overflow-y-auto pr-1">
          {posts.length === 0 ? (
            <p className="text-sm text-slate-400 italic">No posts yet.</p>
          ) : (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </div>
        <a
          href="https://www.linkedin.com/in/sammyjoe/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full text-sm bg-[#0A66C2] hover:bg-[#004182] text-white px-4 py-2 rounded-full transition"
        >
          <Linkedin size={14} /> View Full Profile
        </a>
      </div>
    </aside>
  );
}
