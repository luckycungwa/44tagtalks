import React from 'react';
import DOMPurify from 'dompurify';

const RichTextRenderer = ({ content }) => {
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

    if (block.type === 'ol') {
      return (
        <ol key={index} className="my-4">
          {block.children.map((li, liIndex) => (
            <li key={liIndex}>{renderInline(li.children)}</li>
          ))}
        </ol>
      );
    }

    if (block.type === 'li') {
      return <li key={index}>{renderInline(block.children)}</li>;
    }

    // Headings
    if (block.type === 'h1') {
      return (
        <h1 key={index} className="text-4xl font-bold">
          {renderInline(block.children)}
        </h1>
      );
    }
    if (block.type === 'h2') {
      return (
        <h2 key={index} className="my-4 text-3xl font-bold">
          {renderInline(block.children)}
        </h2>
      );
    }
    if (block.type === 'h3') {
      return (
        <h3 key={index} className="my-2 text-2xl font-bold">
          {renderInline(block.children)}
        </h3>
      );
    }
    if (block.type === 'h4') {
      return (
        <h4 key={index} className="my-2 text-xl font-bold">
          {renderInline(block.children)}
        </h4>
      );
    }
    if (block.type === 'h5') {
      return (
        <h5 key={index} className="my-2 text-lg font-bold">
          {renderInline(block.children)}
        </h5>
      );
    }
    if (block.type === 'h6') {
      return (
        <h6 key={index} className="my-2 text-sm font-bold">
          {renderInline(block.children)}
        </h6>
      );
    }

    if (block.type === 'p') {
      return (
        <p key={index} className="mb-4">
          {renderInline(block.children)}
        </p>
      );
    }

    if (block.type === 'code') {
      return (
        <pre key={index} className="my-4 bg-gray-100 p-4 rounded">
          <code>{renderInline(block.children)}</code>
        </pre>
      );
    }

    if (block.type === 'blockquote') {
      return (
        <blockquote key={index} className="my-4 border-l-4 border-gray-300 pl-4 italic">
          {renderInline(block.children)}
        </blockquote>
      );
    }

    if (block.type === 'img') {
      return (
        <img
          key={index}
          src={block.src}
          alt={block.alt}
          className="bg-gray-100 p-4 rounded my-4 max-w-full h-auto"
        />
      );
    }

    if (block.type === 'video') {
      return (
        <div key={index} className="my-4 aspect-video">
          <iframe
            src={block.src}
            title={block.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }

    if (block.type === 'audio') {
      return (
        <audio key={index} className="my-4 w-full" controls>
          <source src={block.src} type={block.type} />
          Your browser does not support the audio element.
        </audio>
      );
    }

    if (block.type === 'file') {
      return (
        <a
          key={index}
          href={block.src}
          className="my-4 inline-block bg-#ffaa4f-500 hover:bg-#ff4800-700 text-white font-bold py-2 px-4 rounded"
          download
        >
          {renderInline(block.children)}
        </a>
      );
    }

    if (block.type === 'hr') {
      return <hr key={index} className="my-4" />;
    }

    if (block.type === 'table') {
      return (
        <table key={index} className="my-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              {block.header.map((th, thIndex) => (
                <th
                  key={thIndex}
                  className="border border-gray-300 px-4 py-2 bg-gray-100"
                >
                  {renderInline(th.children)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((td, tdIndex) => (
                  <td
                    key={tdIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {renderInline(td.children)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // Handle text alignment (if supported by payload cms data structure)
    if (block.type === 'paragraph' && block.align) {
      return (
        <p
          key={index}
          className={`mb-4 text-${block.align}`} 
        >
          {renderInline(block.children)}
        </p>
      );
    }

    // Handle empty blocks
    const isEmptyBlock =
      block.children.length === 1 && block.children[0].text.trim() === '';

    if (isEmptyBlock) {
      return <br key={index} />;
    }

    // Default to paragraph if no specific block type matches
    return (
      <p key={index} className="mb-4">
        {renderInline(block.children)}
      </p>
    );
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

      if (inline.strikethrough) {
        element = <s key={index}>{element}</s>;
      }

      if (inline.code) {
        element = (
          <code key={index} className="bg-gray-200 p-1 rounded">
            {element}
          </code>
        );
      }

      if (inline.link) {
        element = (
          <a
            key={index}
            href={inline.link.url}
            target={inline.link.newTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {element}
          </a>
        );
      }

      if (inline.image) {
        element = (
          <img
            key={index}
            src={inline.image.src}
            alt={inline.image.alt}
            className="inline" 
          />
        );
      }

      return element;
    });
  };

  return (
    <div className="rich-text-content">
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default RichTextRenderer;