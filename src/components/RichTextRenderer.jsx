import React from 'react';
import DOMPurify from 'dompurify';

const RichTextRenderer = ({ content }) => {

  const sanitizedContent = DOMPurify.sanitize(content);

  const renderBlock = (block, index) => {
    if (block.type === 'ul') {
      return (
        <ul key={index} className="my-4">
          {block.children.map((li, liIndex) => (
            <li key={liIndex}>{renderInline(li.children)}</li>
          ))}
        </ul>
      );
    }
    

    // Check if the block is empty (only contains whitespace)
    const isEmptyBlock = block.children.length === 1 && block.children[0].text.trim() === '';

    if (isEmptyBlock) {
      return <br key={index} />;
    }

    return <p key={index} className="my-4">{renderInline(block.children)}</p>;
  };

  const renderInline = (inlineContent) => {
    return inlineContent.map((inline, index) => {
      let element = inline.text;

      if (inline.bold) {
        element = <strong key={index}>{element}</strong>;
      }

      if (inline.italic) {
        element = <em key={index}>{element}</em>;
      }

      if (inline.underline) {
        element = <u key={index}>{element}</u>;
      }

      if (inline.linkType === 'custom') {
        element = (
          <a key={index} href={inline.url} target={inline.newTab ? "_blank" : "_self"} rel="noopener noreferrer">
            {renderInline(inline.children)}
          </a>
        );
      }

      return element;
    });
  };

  return (
    <div className="rich-text-content">
      {content.map((block, index) => renderBlock(block, index))}
      {/* dangerouslySetInnerHTML={{ __html: sanitizedContent }} */}
    </div>
  );
};

export default RichTextRenderer;