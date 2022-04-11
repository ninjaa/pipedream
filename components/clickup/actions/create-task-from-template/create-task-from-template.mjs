import clickup from "../../clickup.app.mjs";

export default {
  key: "clickup-create-task-from-template",
  name: "Create Task From Template",
  description: "Creates a new task from a template. See the docs [here](https://clickup.com/api) in **Task Templates  / Create Task From Template** section.",
  version: "0.0.1",
  type: "action",
  props: {
    clickup,
    workspaceId: {
      propDefinition: [
        clickup,
        "workspaces",
      ],
    },
    spaceId: {
      propDefinition: [
        clickup,
        "spaces",
        (c) => ({
          workspaceId: c.workspaceId,
        }),
      ],
      optional: true,
    },
    folderId: {
      propDefinition: [
        clickup,
        "folders",
        (c) => ({
          spaceId: c.spaceId,
        }),
      ],
      optional: true,
    },
    listId: {
      propDefinition: [
        clickup,
        "lists",
        (c) => ({
          spaceId: c.spaceId,
          folderId: c.folderId,
        }),
      ],
    },
    taskTemplateId: {
      propDefinition: [
        clickup,
        "taskTemplates",
        (c) => ({
          workspaceId: c.workspaceId,
        }),
      ],
    },
    name: {
      label: "Name",
      type: "string",
      description: "The name of task",
    },
  },
  async run({ $ }) {
    const {
      listId,
      taskTemplateId,
      name,
    } = this;

    return this.clickup.createTaskFromTemplate({
      $,
      listId,
      taskTemplateId,
      data: {
        name,
      },
    });
  },
};