import React from 'react';

const MainContent = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return <p>No content available</p>;
  }
// rich text component
  const renderNode = (node, index) => {
    switch (node.type) {
      case 'paragraph':
        return <p key={index} className="mb-4">{node.children.map(renderChild)}</p>;
      case 'heading':
        const HeadingTag = `h${node.level}`;
        return <HeadingTag key={index} className="mb-4 font-bold">{node.children.map(renderChild)}</HeadingTag>;
      case 'list':
        const ListTag = node.listType === 'numbered' ? 'ol' : 'ul';
        return (
          <ListTag key={index} className="mb-4 ml-6 list-disc">
            {node.children.map((item, itemIndex) => (
              <li key={itemIndex}>{item.children.map(renderChild)}</li>
            ))}
          </ListTag>
        );
      case 'link':
        return <a key={index} href={node.url} className="text-blue-500 hover:underline">{node.children.map(renderChild)}</a>;
      default:
        return null;
    }
  };

  const renderChild = (child, index) => {
    if (typeof child === 'string') {
      return child;
    }
    if (child.bold) {
      return <strong key={index}>{child.text}</strong>;
    }
    if (child.italic) {
      return <em key={index}>{child.text}</em>;
    }
    if (child.underline) {
      return <u key={index}>{child.text}</u>;
    }
    return child.text;
  };

  return <div>{content.map(renderNode)}</div>;
};

export default MainContent;