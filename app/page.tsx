import Image from "next/image";
import styles from "./page.module.css";
import { PrintInterviewForm } from "./components/printInterviewForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/images/open-closed-principle.png" alt="OCP" />
      <h1>Understanding the Open-Closed Principle (OCP)</h1>
      <div className={styles.info}>
        <p>
        The objective of this topic is to explain the importance of OCP in software engineering, emphasizing 
        maintainable and extensible code. Learners will understand OCP's definition, its origins by Bertrand Meyer, and its role in SOLID 
        principles by Robert C. Martin. The topic highlights OCP's benefits, such as improved maintainability and scalability. 
        By the end, learners will be able to explain, recognize, and implement OCP in their projects for better code quality.
        </p>
      </div>
      <div className={styles.info}>
        <p>
          The Open-Closed Principle (OCP) was originally formulated by Bertrand Meyer, a Swiss computer scientist, in his 1988 
          book "Object-Oriented Software Construction." Meyer's principle stated that software entities (classes, modules, functions, 
          etc.) should be open for extension but closed for modification. This principle is part of the broader SOLID principles, 
          which were later popularized by Robert C. Martin (also known as "Uncle Bob"), a software engineer and author, in the early 
          2000s.</p>
      </div>
      <div className={styles.concept}>
        <strong>Key Concepts:</strong>
        <ol>
          <li><strong>Open for Extension:</strong> A module or class should allow its behavior to be extended. This means that you should be able to add new functionality to the existing codebase.</li>
          <li><strong>Closed for Modification:</strong> Once a class or module has been developed and tested, it should not be modified. This protects existing code from being changed, reducing the risk of introducing new bugs.</li>
        </ol>
      </div>
      <div className={styles.benefits}>
        <strong>Benefits:</strong>
        <ol>
          <li><strong>Enhances Maintainability:</strong> By preventing changes to existing code, it becomes easier to maintain.</li>
          <li><strong>Promotes Reusability:</strong> Well-designed components can be reused across different parts of the application or in different projects.</li>
          <li><strong>Improves Scalability:</strong> New features can be added without altering the stable, existing codebase..</li>
          <li><strong>Reduces Risk:</strong> Limiting modifications to tested code reduces the chances of introducing new bugs.</li>
        </ol>
      </div>
      <h1>Sample Interview Form</h1>
      <PrintInterviewForm questions={ [
        {
            type: 'boolean',
            description: "Do you love WCST?",
        },
        {
            type: 'multiple-choice',
            description: "What is your most favorite language?",
            options: ["Javascript", "C++", "C#", "Python"]
        },
        {
            type: "text",
            description: 'Describe your favorite JS feature',
        },
        {
          type: "text",
          description: 'Tell me about your self',
        },
        {
          type: "range",
          description: 'What is the minimum and maximum salary range in your country?',
        }
      ]}/>
    </main>
  );
}
